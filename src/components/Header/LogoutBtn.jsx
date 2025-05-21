import { useDispatch } from "react-redux";
import React from "react";
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authservice.logout().then(() => { dispatch(logout()) })
    }
    return (
        <button
            onClick={logoutHandler}
            className="hover:text-gray-900 text-sm text-gray-600"
        >
            Logout
        </button>
    )
}

export default LogoutBtn