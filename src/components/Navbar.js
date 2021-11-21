import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { FaGithub } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <div>
            <nav className={classes.navbar}>
                <div className={classes.navCenter}>
                    <Link to='/'>
                        <FaGithub size={33} />
                    </Link>
                    <ul className={classes.navLinks}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/search'>Search User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
