import React, { useState } from  'react';

const UserForm = () => {
    //inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    //validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    //new user
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, passwordConfirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };
    //handlers
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters long");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters long");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters long");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
    }
    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
        if(e.target.value !== password) {
            setPasswordConfirmError("Passwords do not match");
        } else {
            setPasswordConfirmError("");
        }
    }
    //component render
    return(
        <div>
            <form onSubmit={ createUser }>
                <label>First Name:
                    {
                        firstNameError ?
                        <p className="errorMsg">{ firstNameError }</p>:
                        ''
                    }
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                </label> 
                <label>
                    Last Name:
                    {
                        lastNameError ?
                        <p className="errorMsg">{ lastNameError }</p>:
                        ''
                    }
                    <input type="text" value={lastName} onChange={ handleLastName } />
                </label>
                <label>
                    Email Address:
                    {
                        emailError ?
                        <p className="errorMsg">{ emailError }</p>:
                        ''
                    }
                    <input type="text" value={email} onChange={ handleEmail } />
                </label>
                <label>
                    Password:
                    {
                        passwordError ?
                        <p className="errorMsg">{ passwordError }</p>:
                        ''
                    }
                    <input type="password" value={password} onChange={ handlePassword } />
                </label>
                <label>
                    Confirm Password:
                    {
                        passwordConfirmError ?
                        <p className="errorMsg">{ passwordConfirmError }</p>:
                        ''
                    }
                    <input type="password" value={passwordConfirm} onChange={ handlePasswordConfirm } />
                </label>
            </form>
        </div>
    );
};

export default UserForm;