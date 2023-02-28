import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [useremail,setUserEmail]=useState(' ');


    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true)
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })

    }
    const handleemailBlur = event => {
        const email = event.target.value;
        setUserEmail(email)

    }

    const handleResetPass = () => {
        if(!useremail){
            alert('please enter your email')
            return;
        }
        sendPasswordResetEmail(auth, useremail)
        .then(()=>{
            alert('Passwort Reset Email Sent! plz cheack your email')
        })
        .catch(error=>{
            console.error(error)


        })
    }

    return (
        <div>
            <h1 className='text-center text-success'>Login Form</h1>
            <Form className='loginform' onSubmit={handleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleemailBlur } type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>


                <Button variant="success" type="submit">
                    LogIn
                </Button>

                <p>If New to this website? <Link to='/register'>Register</Link></p>
                <p>Forget Password? <button type='button' onClick={handleResetPass} className='btn btn-link'>reset</button></p>
                {
                    success && <p>SuccessFully Login This Website</p>
                }

            </Form>

        </div>
    );
};

export default Login;