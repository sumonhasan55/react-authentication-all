import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import './RegisterReactBoostrap.css';
import { Link } from 'react-router-dom';
import { Alert } from 'bootstrap';




const auth = getAuth(app);

const RegisterReactBoostrap = () => {
    const [passwordError, setPasswordError] =useState('');
    const [success, setSuccess]=useState(false)



    
const handleRegister = event =>{
    event.preventDefault();
    setSuccess(false)
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if(password.length<6){
        setPasswordError('please should be at least 6 digit')
        return;
    }
    setPasswordError('')
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
        const user =result.user;
        setSuccess(true)
        updateUserName();
        verifyEmail();
        console.log(user);
        form.reset();

    })
    .catch(error=>{
        console.error('error',error)
        setPasswordError(error.message)
    } )
  
    console.log(email,password)
  };

  const verifyEmail =()=>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
        alert('Please Cheack Your Email And Verify')
    })
  };

  const updateUserName = (name)=>{
    updateProfile(auth.currentUser,{
        displayNa: name
    })
    .then(()=>{
        console.log('display Name updated')

    })
    .catch(error=>{
        console.error(error)
    })
  }
  

    const handlepasswordBlur= event =>{
        console.log(event.target.value)
      
      }
      const handleEmailBlur= event =>{
        console.log(event.target.value)
      
      }
      const handleNameBlur=event=>{
        console.log(event.target.value)
      }

    return (
        <div className='regform'>
            <h1 className='text-center text-primary'>Register Form</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" name='name' placeholder="Enter Name" required/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlepasswordBlur} type="password" name='password' placeholder="Password" required />
                </Form.Group>
               <p className='text-danger'>{passwordError}</p>
               {
                success && <p className='text-success'>User Create SuccessFully</p>
               }
                
                <Button variant="primary" type="submit">
                  Register
                </Button>
                <p>Already Have An Account?<Link to='/login'>Login</Link></p>
               
            </Form>

        </div>
    );
};

export default RegisterReactBoostrap;