import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { AuthContext } from '../helpers/AuthContext'
import { UserContext } from '../helpers/UserContext'
export const Navbar = (props) => {
    // const [state, setstate] = useState(initialState)

    const { authState } = useContext(AuthContext)
    // const user = useContext(UserContext)

    const activeClass = (e) => {
        $('.nav-link').removeClass("active")
        $("." + e).addClass("active")
    }

    let showlogin = <div className="nav-item">Not found</div>
    if (!authState.status) {
        showlogin = <> <div className="navbar-nav" onClick={ () => activeClass('login') }>
            <Link className="nav-link login" aria-current="page" to="/login">Login</Link>
        </div>
            <div className="navbar-nav" onClick={ () => activeClass('register') }>
                <Link className="nav-link register" aria-current="page" to="/register">Registration</Link>
            </div></>
    } else {
        showlogin = <>
            <div className="navar-nav"><a href="" tabIndex="-1" aria-disabled="true" className="nav-link text-white">{ authState.username }</a></div>
            <div className="navbar-nav"><a className="nav-link" onClick={ () => props.logout() } tabIndex="-1" aria-disabled="true">Logout</a></div></>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">MvcTutorial</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item" onClick={ () => activeClass('home') }>
                            <Link className="nav-link home" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item" onClick={ () => activeClass('createpost') }>
                            <Link className="nav-link createpost" aria-current="page" to="/post-form">Create-Post</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        { showlogin }

                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
