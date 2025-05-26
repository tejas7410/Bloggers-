import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth.js"
import { login, logout } from "./store/authslice.js"
import { Footer, Header } from './components/index.js'
import { Outlet } from 'react-router-dom'
// Importing components and services

//App component serves as the main entry point for the application.
//allows for user authentication and renders the main layout with header, footer, and outlet for nested routes.
// It uses React hooks for managing state and side effects, and Redux for state management.
// It checks if a user is logged in and updates the Redux store accordingly.

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App