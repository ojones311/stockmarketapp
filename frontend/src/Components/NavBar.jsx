import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return(
        <div className='nav-bar'>    
            <div className='container flex'>
                <h1 class='logo'>Speculator</h1>
                <ul><Link to='/'>Profile</Link></ul>
                <ul><Link to='/chart'>Home</Link>{" "}</ul>
                <ul><Link to='/about'>About</Link>{" "}</ul>
                <ul><Link to='/users'>Users</Link>{" "}</ul>
            </div>
        </div>
    )
}

export default NavBar