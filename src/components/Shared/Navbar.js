import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    
    return (
        <div style={{textAlign:'center'}} className="header">
            <img style={{"height": "80px", "textAlign":"center"}} className="logo img-fluid" src={logo} alt="" />

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid navigation">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Products</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Order Reviews</a>
                </li>
                <li class="nav-item dropdown"> 
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Manage Inventory Here</a>
                </li>
            </ul>
           
            <form action="" className="search-form d-flex">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type Here To Search" /> 
                    </div>
                    <FontAwesomeIcon style={{color:'white', fontSize:"25px", margin:' 0 20px', cursor:'pointer'}} icon={faCartPlus} />
                    <FontAwesomeIcon style={{color:'white', fontSize:"25px", margin:' 0 20px',cursor:'pointer'}} icon={faHeart} />
                   
            </form>
            </div>
        </div>
</nav>
        </div>
    );
};

export default Navbar;