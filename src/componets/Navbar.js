import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow  ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/profile-page">Profile</Link>
                    <Link className="nav-link" to="#">Pricing</Link>
                    <Link className="nav-link disabled" to="#" tabIndex={-1} aria-disabled="true">Disabled</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
