import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { isLoggedContext } from '../../Contexts/isLogged';

const Logout = () => { //props

    const {isLogged,setIsLogged} = useContext(isLoggedContext);
    const navigate= useNavigate()

    const handleLogout = () => {
        setIsLogged(false);
        navigate("/products")
        console.log("You Logged in Welcome ^^");
    }


    return (<>

    <Form onSubmit={() => { handleLogout() }} autoComplete='off'>
        
        <Button variant="primary" type="submit" >
            Log Out
        </Button>
    </Form>
    
    </>
    )
}

export default Logout;
