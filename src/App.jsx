import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import { Header, Footer } from './components/index'
// import { login, logout } from './store/authslice'
import { authSlice } from './store/authslice';
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { login, logout } = authSlice.actions
  useEffect(() => {
    authservice.getCurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      }).catch((error) => {
        console.log("Appwrite service :: getCurrentUser :: error", error)
        dispatch(logout())
      }).finally(() => setLoading(false))
  }, [])
  return !loading ? (
    <div className="flex flex-wrap content-between min-h-screen text-white bg-gray-900">
      <div className='block w-full'>
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        className="mb-8 text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        Blogger...
      </motion.div>
    </div>
  );
}

export default App
