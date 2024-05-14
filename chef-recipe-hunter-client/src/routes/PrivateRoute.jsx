import React, { Children, useContext } from 'react'
import { AuthContext } from '../Components/Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
}

export default PrivateRoute