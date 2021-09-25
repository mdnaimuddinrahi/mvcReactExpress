import React, { useState, useEffect, useContext } from 'react'
import UserServices from '../services/UserServices'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';
import { UserContext } from '../helpers/UserContext';
import { toast } from 'react-toastify'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext)
    const { setAuthUser } = useContext(UserContext)
    let history = useHistory()

    useEffect(() => {
        console.log(`localStorage.getItem("accessToken")`, localStorage.getItem("accessToken"))
    }, [])

    const submitForm = async (event) => {
        event.preventDefault()
        const user = { username: username, password: password }
        await UserServices.login(user)
        return getUser()
    }

    const getUser = async () => {
        const user = await UserServices.auth()
        if (user.error) {
            toast.error(user.error, {
                theme: "colored"
            })
            setAuthState(false)
        } else {
            setAuthUser(user)
            setAuthState(true)
            history.push("/")
        }
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
