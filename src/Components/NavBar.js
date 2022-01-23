import { Link } from 'react-router-dom';

import React from 'react';

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <span className='h2'>Furniture</span>
                        <span className='h3 font-weight-bold'>Shop</span>
                    </Link>

                    {/* List icon when responsive */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to="/about">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/contact">
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/products">
                                    <span>See products</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <Link className='nav-link active' to="/signup">
                                    <span>Sign-up</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/signin">
                                    <span>Sign-in</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
