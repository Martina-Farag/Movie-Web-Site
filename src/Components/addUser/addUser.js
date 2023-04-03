import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddUser = () => {

    const [user, setUser] = useState({
        userName: "",
        userEmail: ""
    });

    const [errors, setErrors] = useState({
        userNameError: "",
        userEmailError: ""
    })

    const handleForm = (e) => {
        // console.log(e.target);
        switch (e.target.name) {
            case "userName":
                setUser({ ...user, userName: e.target.value })
                setErrors({
                    ...errors, userNameError:
                        (e.target.value.length == 0) ? "Name is Required" :
                            (e.target.value.length < 4) ?
                                "Name must be at least 4 characters"
                                : ""
                })

                break;

            case "userEmail":
                setUser({ ...user, userEmail: e.target.value })
                setErrors({
                    ...errors, userEmailError: (e.target.value.length == 0)
                        ? "Email is Required" : (e.target.value.includes("@")) ? "" :
                            "law sam7t da5l @"
                })
                break;

            default:
                return;
        }


    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

    }
    return (

        <Form onSubmit={(evt) => { handleSubmit(evt) }} autoComplete='off'>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name :</Form.Label>

                <Form.Control className={`${errors.userNameError ? 'border-danger shadow-none' : 'border-success'}`}
                    name="userName" type="text"
                    placeholder="Enter Name" value={user.userName} onChange={(evt) => { handleForm(evt) }} />
                <p className="text-danger">{errors.userNameError}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address :</Form.Label>

                <Form.Control name="userEmail" type="email"
                    placeholder="Enter email" value={user.userEmail} onChange={(evt) => { handleForm(evt) }} />
                <p className="text-danger"> {errors.userEmailError}</p>

            </Form.Group>



            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>

    );
}

export default AddUser;
