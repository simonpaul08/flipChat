import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_NAME = "flipchat_user"

const AuthContext = createContext(null);

export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    // handle set user
    const handleSetUser = (values) => {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(values))
        setCurrentUser(values)
    };

    // handle logout user
    const handleLogout = () => {
        localStorage.removeItem(STORAGE_NAME)
        setCurrentUser(null)
    }

    // presist user
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(STORAGE_NAME))
        if(user){
            setCurrentUser(user)
        }
    }, [])

    let values = {
        currentUser,
        handleSetUser,
        handleLogout
    }


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
