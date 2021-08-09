import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
const Navbar = () => {
    
    return (
        <div style={{textAlign:'center'}} className="header">
            <img style={{"height": "80px", "textAlign":"center"}} className="logo img-fluid" src={logo} alt="" />

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid navigation">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/review">Order Reviews</Link>
                </li>
               
                <li className="nav-item">
                <Link className="nav-link" to="/manageInventory">Manage Inventory Here</Link>
                </li>
            </ul>
           
            <form action="" className="search-form d-flex">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type Here To Search" /> 
                    </div>
                    <FontAwesomeIcon style={{color:'white', fontSize:"25px", marginLeft:'20px', cursor:'pointer'}} icon={faCartPlus} /> <span style={{color:"white",marginLeft:'5px'}}></span>
                    <FontAwesomeIcon style={{color:'white', fontSize:"25px", margin:' 0 20px',cursor:'pointer'}} icon={faHeart} />
                   
            </form>
            </div>
        </div>
</nav>
        </div>
    );
};

export default Navbar;