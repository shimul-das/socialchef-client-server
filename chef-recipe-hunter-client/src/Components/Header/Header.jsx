
import React, { useContext } from 'react';
import './header.css';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';
import { Button, Container, Nav, Navbar, Image } from 'react-bootstrap';
import logo1 from './../../../public/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout()
      .then(result => {})
      .catch(error => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo1}
            width="150"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-4 fw-semibold">
            <Nav.Link href="/" active={location.pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/blogs"
              active={location.pathname === '/blogs'}
            >
              Blog
            </Nav.Link>
          </Nav>
          <Nav fs-4 fw-semibold>
            {user && user.photoURL ? (
              <div className="user-profile">
                <Image
                  src={user.photoURL}
                  roundedCircle
                  style={{ width: '50px', height: '50px' }}
                />
                <span className="user-profile-name">{user.displayName}</span>
              </div>
            ) : (
              <Nav.Link href="#deets">
                <span className="user-profile-name">{user?.displayName}</span>
              </Nav.Link>
            )}

            <Nav.Link eventKey={2} href="#memes">
              {user ? (
                <Button onClick={handleLogout} style={{backgroundColor:"#FF8E88"}}>
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className='login-btn' variant="secondary" style={{backgroundColor:"#FF8E88"}}>Login</Button>
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
