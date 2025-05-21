import { useDispatch } from "react-redux";
import React from "react";
import authservice from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authservice.logout().then(() => { dispatch(logout()) })
        Navigate('/')
    }
    return (
        <button
            onClick={logoutHandler}
            className="className='inline-bock hover:bg-blue-100 px-6 py-2 duration-200 rounded-4xl '"
        >
            Logout
        </button>
    )
}

export default LogoutBtn