import React, { useState } from 'react'
import UserServices from '../services/UserServices'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitForm = async (event) => {
        event.preventDefault()
        const user = { username: username, password: password }
        const data = await UserServices.login(user)
        console.log(`data`, data)
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
