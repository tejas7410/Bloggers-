import React from 'react'
import { Button, Container, Logo, LogoutBtn } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const header = () => {
    const authstatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        { name: "Home", path: "/", active: true },
        { name: "Login", path: "/login", active: !authstatus },
        { name: "Signup", path: "/signup", active: !authstatus },
        { name: "All Posts", path: "/all-posts", active: authstatus },
        { name: "Add Post", path: "/add-post", active: authstatus },

    ]


    return (
        <header className='py-3 bg-gray-600 shadow'>
            <Container >
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />

                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.path)}
                                        className='inline-bock hover:bg-blue-100 px-6 py-2 duration-200 rounded-full'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authstatus && (
                            <div >
                                <LogoutBtn />
                            </div>
                        )}
                    </ul>
                </nav>
            </ Container >
        </header >
    )
}

export default header
