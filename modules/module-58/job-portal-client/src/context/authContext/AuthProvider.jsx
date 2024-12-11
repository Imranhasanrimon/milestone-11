import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from './../../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('state captured', currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        createUser,
        user,
        setUser,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;