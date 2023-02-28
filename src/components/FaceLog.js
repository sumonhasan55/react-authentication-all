import React from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';
import { Card, CardGroup } from 'react-bootstrap';


const auth = getAuth(app);





const FaceLog = () => {
    const facebookprovider = new FacebookAuthProvider()
    const googleprovider = new GoogleAuthProvider()
    const gitprovider = new GithubAuthProvider()

    const handleLoginWithFacebook = () => {
        signInWithPopup(auth, facebookprovider)
            .then((result) => {
                const user = result.user;
                console.log(user)

            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }

    const handleLoginWithGit = () => {
        signInWithPopup(auth, gitprovider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }
    return (
       
            <CardGroup className=''>
            <Card border="primary" style={{ width: '15rem' }} className="m-1">
                <Card.Header>signInWithPopup</Card.Header>
                <Card.Body>
                    <Card.Title>Sign In With Facebook</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <button className='btn btn-primary text-center' onClick={handleLoginWithFacebook}>Sign In With Facebook</button>

                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '15rem' }} className="m-1">
                <Card.Header>signInWithPopup</Card.Header>
                <Card.Body>
                    <Card.Title>Sign In With Facebook</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <button className='btn btn-success' onClick={handleLoginWithGoogle}>Sign In With Google</button>

                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '15rem' }} className="m-1">
                <Card.Header>signInWithPopup</Card.Header>
                <Card.Body>
                    <Card.Title>Sign In With GitHub</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <button className='btn btn-secondary' onClick={handleLoginWithGit}>Sign In With GitHub</button>
                </Card.Body>
            </Card>


            </CardGroup>

      
    );
};

export default FaceLog;