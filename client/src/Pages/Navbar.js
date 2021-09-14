import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </div>
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/post-form">Create-Post</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
