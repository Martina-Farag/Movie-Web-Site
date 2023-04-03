import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { isLoggedContext } from '../../Contexts/isLogged';

const MyForm = () => { //props

    const navigate= useNavigate()

    const [passwordShown, setPasswordShown] = useState(false);

    const [user, setUser] = useState({
        Name: "",
        userEmail: "",
        userName: "",
        Password: "",
        ConfirmPass: ""
    });

    const [errors, setErrors] = useState({
        NameError: "",
        userEmailError: "",
        UserNameError: "",
        userPassError: "",
        confirmError: ""
    })

    const {isLogged,setIsLogged} = useContext(isLoggedContext);

    const handleForm = (e) => {

        const regex = new RegExp('[a-zA-Z0-9]{4,}@gmail.com');
        const regex2 = new RegExp('[a-zA-Z0-9]+[*@%$#]+');

        switch (e.target.name) {

            case "name":
                setUser({ ...user, Name: e.target.value})
                setErrors({
                    ...errors, NameError: (e.target.value.length == 0)
                        ? "Name is Required" : ""
                })
            break;
            
            case "userName":
                setUser({ ...user, userName: e.target.value})
                setErrors({
                    ...errors, UserNameError: (e.target.value.length == 0)
                        ? "User Name is Required" : (e.target.value.includes(" ")) ? "User Name can't contain spaces" : ""
                })
            break;

            case "userEmail":
                setUser({ ...user, userEmail: e.target.value})
                setErrors({
                    ...errors, userEmailError: (e.target.value.length == 0)
                        ? "Email is Required" : regex.test(e.target.value) ? "" :    
                            "invalid Email"
                })
            break;

            case "Password":
                setUser({ ...user, Password: e.target.value})
                setErrors({
                    ...errors, userPassError:
                        (e.target.value.length == 0) ? "Password is Required" :
                            (e.target.value.length < 8) ?
                                "Password must be at least 8 letters"
                                : regex2.test(e.target.value) ?
                                "" : "Password must contain at least one lowercase letter and at least one uppercase letter and special characters"
                })
            break;

            case "Confirm":
                setUser({ ...user, ConfirmPass: e.target.value})
                setErrors({
                    ...errors, confirmError:
                        (e.target.value.length == 0) ? "Confirm Password is Required" :
                            (e.target.value == user.Password) ? "" :
                                "Confirm Password not matche your password"
                })
            break;

            default:
                return;
        }
    }

    const handleSubmit = (ev) => {
        console.log(user);
        ev.preventDefault();
        setIsLogged(true);
        navigate("/favourites")
    }


    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (<>

    <Form onSubmit={(evt) => { handleSubmit(evt) }} autoComplete='off'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name"
            value={user.Name} onChange={(e) => { handleForm(e) }} />
            <Form.Text className="text-danger">{errors.NameError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="userEmail" type="email" placeholder="Enter Email"
                value={user.userEmail} onChange={(e) => { handleForm(e) }} />
            {/* <p className="text-danger"> {errors.userEmailError}</p> */}
            <Form.Text className="text-danger">{errors.userEmailError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control name="userName" type="text" placeholder="User Name" 
            value={user.userName} onChange={(e) => { handleForm(e) }} />
            <Form.Text className="text-danger">{errors.UserNameError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="mb-3"
                name="Password" type = {passwordShown ? "text" : "password"}
                value={user.Password} onChange={(e) => { handleForm(e) }} /> 
            {/* <p className="text-danger">{errors.userPassError}</p> */}
            <Form.Text className="text-danger">{errors.userPassError}</Form.Text>
            <br />
            <Button variant="danger" onClick={() => { togglePassword() }} > SHOW </Button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name="Confirm" type="password" placeholder="Confirm Password" 
            value={user.ConfirmPass} onChange={(e) => { handleForm(e) }} />
            <Form.Text className="text-danger">{errors.confirmError}</Form.Text>
        </Form.Group>
        {/*  onClick={props.setIsLogged(true)}     onClick={props(true)}  */}
        <Button variant="primary" type="submit" >
            Submit
        </Button>
    </Form>
    
    </>
    )
}

export default MyForm;
