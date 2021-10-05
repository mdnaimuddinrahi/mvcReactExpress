import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Pages/Home'
import PostForm from './Pages/PostForm'
import Navbar from './Pages/Navbar'
import Post from './Pages/Post'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import { ToastContainer } from 'react-toastify'
import { AuthContext } from './helpers/AuthContext'
import { toast } from 'react-toastify'
import UserServices from './services/UserServices'
import Profile from './Pages/Profile'


function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  })

  useEffect(() => {
    getAuthUser()
  }, [authState.status])

  const getAuthUser = async () => {
    const user = await UserServices.auth()
    if (user.error) {
      toast.error(user.error, {
        theme: "colored"
      })
      setAuthState({ username: '', id: 0, status: false })
    } else {
      setAuthState({
        username: user.username,
        id: user.id,
        status: true,
      })
    }
  }

  const logout = async () => {
    // alert("in logout")
    localStorage.removeItem('accessToken')
    setAuthState(false)
  }

  return (
    <div className="App">

      <AuthContext.Provider value={ { authState, setAuthState } }>
        <Router>
          <Navbar logout={ logout } />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/post-form" exact component={ PostForm } />
            <Route path="/post/:id" exact component={ Post } />
            <Route path="/login" exact component={ Login }></Route>
            <Route path="/register" exact component={ Registration }></Route>
            <Route path="/profile/:id" exact component={ Profile }></Route>
          </Switch>
        </Router>
        <ToastContainer />
      </AuthContext.Provider>
    </div>
  )
}


export default App;
