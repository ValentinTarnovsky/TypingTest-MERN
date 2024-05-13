import { createContext, useState, useMemo } from "react";
import { signupRequest } from "../api/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const signup = async (user) => {
        const res = await signupRequest(user);
        console.log(res.data);
        setUser(res.data);
    };

    const contextValue = useMemo(() => ({
        signup,
        user,
    }), [ signup, user ]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};