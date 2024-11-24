import db from '../database/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    try {
        const { name, surname, username, email, password, role } = req.body

        // console.log(req.body)

        if (!name || !surname || !username || !email || !password || !role) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        if (!['admin', 'staff', 'customer'].includes(role)) {
            return res.status(400).json({ error: 'Invalid user role' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const connection = await db()
        const [result] = await connection.execute( `INSERT INTO USER_TABLE (name, surname, username, email, password, role) VALUES (?, ?, ?, ?, ?, ?)`, [name, surname, username, email, hashedPassword, role])

        // const token = jwt.sign({ id: result.insertId, role: user_role }, process.env.JWT_SECRET, { expiresIn: '1h' })
        const token = jwt.sign(
            {
                id: result.insertId,
                role: role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )

        res.status(201).json({
            message: 'User created successfully',
            token,
            id: result.insertId
        })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'User with this email already exists' });
        } else {
            console.error('Error signing up user:', error);
            res.status(500).json({ error: `An error occurred while signing up the user${error}` });
        }
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const connection = await db()
        const [result] = await connection.execute('SELECT * FROM USER_TABLE WHERE email = ?', [email])

        const user = result[0]

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({
            id: user.id,
            role: user.role
        }, process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        })

        res.status(200).json({
            message: 'Login successfully',
            token,
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'An error occurred while logging in the user' });
    }
}

export const getProfile = async (req, res) => {
    try {
        console.log(req.user)
        const { id } = req.user

        const connection = await db()
        const [rows] = await connection.execute('SELECT id, name, surname, username, email, role FROM USER_TABLE WHERE id = ?', [id])

        if (rows.length === 0) {
            return res.status(404).json({ error: 'User not found' })
        }

        res.status(200).json({
            message: 'Profile fetched successfully',
            profile: rows[0]
        })
    } catch (error) {
        console.error('Error fetching profile:', error)
        res.status(500).json({ error: 'An error occurred while fetching the user profile' })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { name, surname, username, email, password} = req.body

        const userId = req.user.id

        let updates = []
        let values = []

        if (name) {
            updates.push('name = ?')
            values.push(name)            
        }  
        
        if (surname) {
            updates.push('surname = ?')
            values.push(surname)
        }

        if (username) {
            updates.push('username = ?')
            values.push(username)
        }

        if (email) {
            updates.push('email = ?')
            values.push(email)
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10)
            updates.push('password = ?')
            values.push(hashedPassword)
        }

        if (updates.length === 0) {
            return res.status(400).json({ error: 'No fields to update' })
        }

        values.push(userId)

        const connection = await db()
        await connection.execute(`UPDATE USER_TABLE SET ${updates.join(', ')} WHERE id = ?`, values)

        const [updatedUser] = await connection.execute('SELECT id, name, surname, username, email, role FROM USER_TABLE WHERE id = ?', [userId])

        if (updatedUser.length === 0) {
            return res.status(404).json({ error: 'User not found' })
        }

        res.status(200).json({ 
            message: 'User  profile updated successfully',
            user: updatedUser[0]
        })
    } catch (error) {
        console.error('Error updating user profile:', error)
        res.status(500).json({ error: 'An error occurred while updating the user profile' })
    }
}

export const deleteProfile = async (req, res) => {
    try {
        const { id } = req.body

        const userId = req.user.id

        const connection = await db()
        const [result] = await connection.execute('DELETE FROM USER_TABLE WHERE id = ?', [userId])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User  not found' })
        }

        res.status(200).json({ message: 'User  profile deleted successfully' })

    } catch (error) {
        console.error('Error deleting user profile:', error)
        res.status(500).json({ error: 'An error occurred while deleting the user profile' })
    }
}

export const logout = async (req, res) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1]
        if (!token) return res.status(400).json({ error: 'No token provided' })

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const ttl = decoded.exp - Math.floor(Date.now() / 1000)
            await redisClient.setex(`blacklist_${token}`, ttl, token)

            res.status(200).json({ message: 'Logged out successfully' })
    } catch (error) {
        console.error('Error during logout:', error)
        res.status(500).json({ error: 'An error occurred during logout' })
    }
}