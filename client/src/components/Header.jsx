import { useState, useEffect } from "react"
import { HiOutlineUserCircle } from "react-icons/hi2"
import { RiMenu4Line } from "react-icons/ri"
import { CiLogout } from "react-icons/ci"
import { CiLogin } from "react-icons/ci"
import logo from '../assets/images/logo.png'

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
            <a href="/"><img src={logo} alt="Rendezvous" /></a>

            <section className="menu">
                <nav>
                    <ul>
                        <li>
                            {
                                isLoggedIn ? (
                                    <>
                                        <a href="/profile"><HiOutlineUserCircle /></a>
                                        
                                    </>
                                ) : (
                                    <>
                                        <a href="/login"><HiOutlineUserCircle /></a>
                                    </>
                                )
                            }
                        </li>

                        <li onClick={toggleMenu}><RiMenu4Line /></li>
                        {
                            isMenuOpen && (
                                <ul className="dropdown">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/menu">Menu</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    {
                                        isLoggedIn ? (
                                            <>
                                                <a onClick={handleLogout}><button>Logout</button></a>
                                            </>
                                        ) : (
                                            <>
                                                <a href="/login"><button>Login</button></a>
                                            </>
                                        )
                                    }
                                </ul>
                            )
                        }
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header