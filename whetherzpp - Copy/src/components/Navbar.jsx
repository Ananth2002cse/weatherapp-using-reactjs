import React from 'react';
import './Navbar.css'
import logo from '../assests/770b805d5c99c7931366c2e84e88f251.jpg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>

        <nav>
            <div className="applogo">
             <Link to='/'> <img src={logo} alt='our logo'width={50} height={50}/></Link>  
            </div>
            <div className="menubar">
                <ol>

                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Abou Us</Link></li>
                </ol>
            </div>
        </nav>
    </div>
  )
}

export default Navbar