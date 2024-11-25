import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    })

    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { password, confirmPassword } = formData

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        try {
            const response = await fetch('http://localhost:8800/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (response.ok) {
                navigate('/login')
            } else {
                setError(result.error || 'Signup failure')
            }
        } catch (error) {
            console.error('Error during signup', error)
            setError('Ann error occured. Please try again')
        }
    }

    return (
        <div className="signup-page">
            <section className="banner">
                <article></article>
            </section>

            <form onSubmit={handleSubmit}>

                <article className="intro">
                    <h3>Get started now!</h3>
                </article>

                <article>
                    <label htmlFor="name">Enter your name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </article>

                <article>
                    <label htmlFor="surname">Enter your surname</label>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />
                </article>

                <article>
                    <label htmlFor="username">Enter your unique username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </article>

                <article>
                    <label htmlFor="email">Enter your student email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </article>

                <article>
                    <label htmlFor="password">Enter your password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </article>

                <article>
                    <label htmlFor="confirmPassword">Confirm your password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </article>

                <article>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="customer">Customer</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                    </select>
                </article>

                {
                    error && <p className="error">{error}</p>
                }

                <article className="login">
                    <p>Have an account? <a href="/login">Log In</a></p>
                </article>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup