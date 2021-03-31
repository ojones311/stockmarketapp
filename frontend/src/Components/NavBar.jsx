import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return(
        <div className='nav-bar'>
            <Link to='/'>Home</Link>{" "}
            <Link to='/about'>About</Link>{" "}
            <Link to='/users'>Users</Link>{" "}
            {/* <Link to='/profile'>Profile</Link>{" "} */}
            {/* <Link to='/stock'>Stock Page</Link>{" "} */}
        </div>
    )
}

export default NavBar