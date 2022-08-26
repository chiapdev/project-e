import React from 'react';
import {Outlet, Link} from "react-router-dom";
import logo from '../../PElogo.png';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                    Project E
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/journal">Journal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/calendar">Calendar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/insulti">Insulti</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}