import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useEffect, useState } from "react";
import firebaseConfig from '../../Firebase'

// firebase.initializeApp(firebaseConfig)
if (firebase.apps.lenght === 0) {
    firebase.initializeApp(firebaseConfig)
}

const AuthConext = createContext()
export const AuthConextProvider = (props) => {
    const auth = LoginManager();
    return <AuthConext.Provider value={auth}>{ props.children}</AuthConext.Provider>
}
export const useAuth = () => {
    return useContext(AuthConext)
}
const LoginManager = () => {
    //set object property
    const [user, setUser] = useState(null);

    //handle sign in with google
    const signInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                setUser(res.user);
            })
            .catch(error => {
                setUser(null)
            })
    }

    //signup with email & password 
    const signUp = (name, email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                }).then(() => {
                    setUser(res);
                    console.log(res.user)
                    window.history.back();

                });
            })
            .catch(err => {
                console.log(err.message)
                setUser({ error: err.message })
            })

    }
    //sign in with email & password

    const signIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user);
                console.log(res.user)
                window.history.back();
            })
            .catch(err => {
                console.log(err.message)
                setUser({ error: err.message })
            })
    }

    // email varification 
    // firebase.auth().sendSignInLinkToEmail(user.email, actionCodeSettings)
    //     .then(varify => {

    //         console.log(varify)
    //         // window.localStorage.setItem('emailForSignIn', email);
    //     })
    //     .catch(error => {
    //        console.log(error)
    //     });
    //=========
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const currUser = user;
                setUser(currUser);
            }
        });

    }, [])
    // handle signout
    const signOut = () => {
        return firebase.auth().signOut()
            .then(res => {
                setUser(null)
            })
    }
    return {
        user,
        signUp,
        signIn,
        signInWithGoogle,
        signOut
    }
}
export default LoginManager;