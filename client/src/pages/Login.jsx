import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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

        try {
            const response = await fetch('http://localhost:8800/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (response.ok) {
                localStorage.setItem('token', result.token)
                navigate('/')
            } else {
                setError(result.error || 'Invalid email or password')
            }
        } catch (error) {
            console.error('Error during login:', error)
            setError('An error occurred during login')
        }
    }


    return (
        <div className="login-page">
            <section className="banner">
                <article>
                </article>
            </section>

            <form onSubmit={handleSubmit}>

                <article className="intro">
                    <h3>Welcome back!</h3>
                    <p>Enter your credentials to access your account</p>
                </article>

                <article>
                    <label htmlFor="email">Enter your student email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
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
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </article>

                {
                    error && <p style={{ color: 'red' }}>{error}</p>
                }

                <article className="signup">
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </article>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login