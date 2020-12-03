import React, { useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form";
import firebaseConfig from '../../Firebase'
import LoginManager from './LoginManager'
import { useHistory, useLocation } from 'react-router-dom';
// firebase.initializeApp(firebaseConfig)
if (firebase.apps.lenght === 0) {
    firebase.initializeApp(firebaseConfig)
}


const Login = () => {

    const [newUser, setnewUser] = useState(false)
    const { register, errors, handleSubmit, watch, reset } = useForm();
    const loginManager = LoginManager()
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    console.log(loginManager.user)

    // email & password authentication 
    const onSubmit = data => {
        if (!newUser) {
            if (data.email && data.password) {
                loginManager.signIn(data.email, data.password);
            }
        } else {
            if (data.name && data.email && data.password) {
                loginManager.signUp(data.name, data.email, data.password)
            }
        }
    }

    //handle signin with redirect
    const googleSignIn = () => {
        loginManager.signInWithGoogle()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleSignInWithEmail = () => {
        loginManager.signIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    // handle sign out
    const signOut = () => {
        loginManager.signOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        if (redirect) {
            history.replace(from);
        }
    }


    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 twitter-left">
                    <div className="p-5">
                        <div className="tweet-service">
                            <div>
                                <h5 className="log-title mb-4"> <SearchIcon /> Follow your interests.</h5>
                                <h5 className="log-title mb-4"><GroupIcon />Hear what people are talking about.</h5>
                                <h5 className="log-title"><ForumIcon />Join the conversation.</h5>
                            </div>
                        </div>

                        <svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1n7nint r-10m99ii r-u8s1d r-1n2wx2z r-1plcrui r-1l2rav9 r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div className="p-5">

                        <div className="text-left tweet-text">
                            <TwitterIcon className="twitter" />
                            <h4 className="mt-3">See what’s happening in <br /> the world right now</h4>
                            <h5 className="join pt-4">
                                Join Twitter today.
                            </h5>

                        </div>
                        <div className="form">
                            {newUser ?
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control mb-3" type="text" name="name" ref={register({ required: true })} placeholder="Your Name" />
                                    <p className="text-left text-danger">  {errors.name && "Please enter your name"}</p>
                                    <input className="form-control mb-3" type="email" name="email" ref={register({ required: true })} placeholder="Your Email" />
                                    <p className="text-left text-danger">{errors.email && "Please enter your email"}</p>
                                    <input className="form-control mb-3" type="password" name="password" ref={register({ required: true })} placeholder="Password" />
                                    <p className="text-left text-danger"> {errors.password && "Please enter your password"}</p>
                                    <input type="password" name="confirm_password" className="form-control" ref={register({ validate: (value) => value === watch('password') })} placeholder="Confirm Password" />
                                    <p className="text-left text-danger"> {errors.confirm_password && "Passwords didn't match."}</p>
                                    <Button type="submit" variant="" className="signup-btn">Sign up</Button>
                                </form> :

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control mb-3" type="text" name="email" ref={register({ required: true })} />
                                    <p className="text-left text-danger"> {errors.email && "Please enter your email"}</p>
                                    <input className="form-control mb-3" type="password" name="password" ref={register({ required: true })} />
                                    <p className="text-left text-danger">  {errors.password && "Please enter your password"}</p>
                                    <Button type="submit" variant="" className="signup-btn" onClick={handleSignInWithEmail}>Login</Button>
                                </form>
                            }
                            <h5 className="mt-3 account" onClick={() => setnewUser(!newUser)}>
                                {newUser ? "Already have an account?" : "Create a new account..."}
                            </h5>
                        </div>
                        {/* <Button variant="" className="signup-btn">Login</Button>
                        <Button variant="" className="signup-btn mt-3">Sign up</Button> */}
                        <Button variant="" className="google-btn mt-3" onClick={googleSignIn}> <FontAwesomeIcon icon={faGooglePlusG} className="google" />  Google</Button>
                    </div>
                </div>
            </div>
            <div className="footer pt-2 mt-3">
                <Link className="nav-link" to="">About</Link>
                <Link className="nav-link" to="">Help Center</Link>
                <Link className="nav-link" to="">Terms of Service</Link>
                <Link className="nav-link" to="">Privacy Policy</Link>
                <Link className="nav-link" to="">Cookie Policy</Link>
                <Link className="nav-link" to="">Ads Info</Link>
                <Link className="nav-link" to="">Blog</Link>
                <Link className="nav-link" to="">Status</Link>
                <Link className="nav-link" to="">Careers</Link>
                <Link className="nav-link" to="">Brand Resource</Link>
                <Link className="nav-link" to="">Advertising</Link>
                <Link className="nav-link" to="">Marketing</Link>
                <Link className="nav-link" to="">Twitter for business</Link>
                <Link className="nav-link" to="">Developers</Link>
                <Link className="nav-link" to="">Directory</Link>
                <Link className="nav-link" to="">Settings</Link>
            </div>
            <p className="text-center font-weight-bold mt-1 pb-3">© 2020 Twitter, Inc.</p>
        </div>
    );
};

export default Login;