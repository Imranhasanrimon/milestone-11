import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from './../../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser?.email);
            if (currentUser?.email) {
                const user = { email: currentUser?.email };
                axios.post('http://localhost:3000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        setLoading(false)
                    })
            } else {
                axios.post('http://localhost:3000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('logout', res.data);
                        setLoading(false)
                    })
            }

        });
        return () => {
            unSubscribe()
        }
    }, [])

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        user,
        setUser,
        loading,
        signInUser,
        signOutUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

//changing in outer directory