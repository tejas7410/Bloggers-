import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from 'react-router-dom'
import { authSlice } from '../store/authslice';

export default function Protected({ children }, authentication = true) {

    const navigate = useNavigation();
    const [loader, setloader] = useState(true)
    const authstatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authstatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authstatus !== authentication) {
            navigate("/")
        }
        setloader(false)
    }, [authstatus, navigate, authentication])
    return (
        loader ? <h1>Loading</h1> : <>{children}</>
    )
}

