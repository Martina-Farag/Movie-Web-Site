import React, { useState } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedContext } from '../../Contexts/isLogged';

const Protected = ({children}) => { 

    const {isLogged,setIsLogged} = useContext(isLoggedContext);

    if(isLogged==false){
        // alert('You must Log in first");
        // Swal.fire(
        //     'You must Log in first!',
        //     'You can Log in from here ^^',
        //     'success'
        //   )
        console.log("You must Log in first");
        return <Navigate to="/login" />
    }
    else {
        return children;
    }
    
}

export default Protected;