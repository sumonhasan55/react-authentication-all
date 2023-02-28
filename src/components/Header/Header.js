import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Authentication</Navbar.Brand>
            <Nav className="me-auto " id='navlink'>
              <Link to='/register'  className='m-3'>Register</Link>
             
              <Link to='/login' className='m-3'>Login</Link>
             
              <Link to='/facelog' className='m-3'>SigninPopUp</Link>
             
            </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;