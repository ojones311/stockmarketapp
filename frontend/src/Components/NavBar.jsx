import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return(
        <div className='nav-bar'>
            <h1 class='logo'>Speculator</h1>
            <div className='container flex'>
                <Link to='/'>Home</Link>{" "}
                <Link to='/about'>About</Link>{" "}
                <Link to='/users'>Users</Link>{" "}
            </div>
        </div>
    )
}

export default NavBar