import { Link } from 'react-router-dom';

import React from 'react';

export const Footer = () => {
    return (
        <div>
            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href="https://www.facebook.com/arm53797/" target='_blank' rel="noreferrer">
                            <i className='icon ion-social-facebook' />
                        </a>
                        <a href="https://www.instagram.com/9_arm_jaruwat/" target='_blank' rel="noreferrer">
                            <i className='icon ion-social-instagram' />
                        </a>
                        <a href="https://github.com/state-dogs-001" target='_blank' rel="noreferrer">
                            <i className='icon ion-social-github' />
                        </a>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <p className='copyright'>
                        <span>Furniture</span>
                        <span className='font-weight-bold'>Shop</span>
                    </p>
                </footer>
            </div>
        </div>
    )
}
