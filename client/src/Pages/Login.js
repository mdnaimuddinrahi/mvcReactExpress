import React, { useState, useEffect, useContext } from 'react'
import UserServices from '../services/UserServices'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { authState, setAuthState } = useContext(AuthContext)
    let history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        // console.log(`token::> `, token.length)
        if (token != null) {
            history.push('/')
        }
    }, [])

    const submitForm = async (event) => {
        event.preventDefault()
        const user = { username: username, password: password }
        const authUser = await UserServices.login(user)
        setAuthState({ username: authUser.username, id: authUser.id, status: true })
        history.push('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <div className="container col-4 p-2 border rounded border-primary">
                <form onSubmit={ submitForm }>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">UserName</label>
                        <input type="text"
                            className="form-control" onChange={ (e) => { setUsername(e.target.value) } } name="username" id="username" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={ (e) => { setPassword(e.target.value) } } name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
