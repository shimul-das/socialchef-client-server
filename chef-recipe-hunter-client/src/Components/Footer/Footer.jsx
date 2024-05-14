import React from 'react'
import logo1 from './../../../public/logo.png';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';


const Footer = () => {
return (
<footer className="bg-info text-dark mt-5 p-5">
    <div className="container-fluid py-3">
        <div className="row">
            <div className="col-md-4 ">
                <img src={logo1} width="150" height="70" className="d-inline-block align-top"
                    alt="React Bootstrap logo" />
                <p className='pe-3 fs-6 fw-semibold text-dark'>Who is The Best Chef in the World? If there is anything a professional chef dreams about, then it is
                    a Michelin star. Getting one is a true testament to a chef’s skill and dedication. This is why the
                    best chefs in the world work hard for years and years to get even a single one to improve their
                    ranking.</p>
            </div>
            <div className="col-md-4 text-center">
                <h3>Quick Link</h3>
                <ul className="list-unstyled fs-5">
                    <Link to='/' className='text-dark'><li>Home</li></Link>
                    <Link to='/blogs' className='text-dark'><li>Blogs</li></Link>
                    <Link to='/login' className='text-dark'><li>Sign In</li></Link>
                    <Link to='/signup' className='text-dark'><li>Sign Up</li></Link>
                </ul>
            </div>
            <div className="col-md-4 text-center">
                <h3>Contact Info</h3>
                <ul className="list-unstyled fs-5">
                    <li><FaMapMarkerAlt></FaMapMarkerAlt> Thailand</li>
                    <li><FaPhone></FaPhone> +66-2-2134567</li>
                    <li><FaEnvelope></FaEnvelope> socialchef@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <p className='text-center'>&copy; 2023 Social Chef. Developed by <span className='text-success'>Shimul Chandra Das</span>.</p>
    </div>
</footer>
)
}

export default Footer