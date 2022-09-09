import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'

import { editUser, addUser } from '../store/users/users.actions';


export default function FormDialog({open, handleClose, formType}) {
    const user = useSelector(({ users }) => users.details);
    const dispatch = useDispatch();
    const [updatedUser, setUpdatedUser] = useState({
        id: user.id,
        firstName: "",
        lastName: "",
        email: user.email,
    });

    function handleSubmit(e){
        handleClose()
        e.preventDefault();
        
        if (formType === "edit") {
            dispatch(editUser(updatedUser));
        }else{
            dispatch(addUser(updatedUser));
        }
    }

    useEffect(()=>{
       if (formType === "edit"){
            setUpdatedUser(user)
        }
        else{
            setUpdatedUser({
                firstName: "",
                lastName: "",
                email: "",
            })
        }
    },[formType])

    const onChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.id]: e.target.value });
    }


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{backgroundColor : "#000"}}>{
                    formType === "edit" ? "Edit User" : "Add User"}</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onChange(e)}
                    value={updatedUser.firstName}
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onChange(e)}
                    value={updatedUser.lastName}
                />
                {
                    formType === "add" ? 
                <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onChange(e)}
                    value={updatedUser.email}
                />
                : null}

                <TextField
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => onChange(e)}
                    value={updatedUser.title}
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color='success' onClick={(e) => handleSubmit(e)}>{formType === "edit" ? "Edit User" : "Add User"}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
