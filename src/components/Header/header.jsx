import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const header = () => {
    const authstatus = useSelector((state) => { state.auth.status })
    console.log(authstatus)
    return (
        <div>
            Header
        </div>
    )
}

export default header
