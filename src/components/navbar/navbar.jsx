import React from "react";
import { Link } from 'react-router-dom';

import './navbar.css'


const Navbar = () => {
 

  return (
    <nav className="navbar navbar-expand-lg navbar bg-dark" id='navbar'>
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/Home">Home<i className="fa fa-fw fa-home"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin">PHP</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                React
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="#">Authentication</Link></li>
                <li><Link className="dropdown-item" href="#">Authorization</Link></li>
                <li><Link className="dropdown-item" href="#">Functionality</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Login" >Login<i className="fa fa-fw fa-user"></i></Link>
            </li>

          
            <li className="nav-item">
              <Link className="nav-link" to="/Signup" >SignUp</Link>
            </li>

           
          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar

