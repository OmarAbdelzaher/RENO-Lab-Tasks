import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open, handleClose, formType}) {
    
    function handleSubmit(){
        handleClose()
    }

    function handleChange(e){
        if(e.target.id === "fname"){
            console.log(e.target.value)
        }
        else if(e.target.id === "lname"){
            console.log(e.target.value)
        }
        else if(e.target.id === "email"){
            console.log(e.target.value)
        }
        else if(e.target.id === "phone"){
            console.log(e.target.value)
        }
        else if(e.target.id === "location"){
            console.log(e.target.value)
        }
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{
                    formType === "edit" ? "Edit User" : "Add User"}</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="fname"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    margin="dense"
                    id="lname"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    margin="dense"
                    id="location"
                    label="Location"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
