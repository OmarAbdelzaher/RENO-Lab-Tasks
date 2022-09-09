import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import FormDialog from './Dialog';

import { setCurrentUser, fetchUsers, deleteUser } from '../store/users/users.actions';

export default function UsersTable() {
  const [usersData, setUsersData] = useState([]);
  const [formType, setFormType] = useState("add");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  const currUser = useSelector(({ users }) => users.details);

  useEffect(() => {
    if (users !== null) {
      console.log(usersData);
      setUsersData([...users]);
    }
  }, [users]);


  function handleClose() {
    setOpen(false);
  };

  useEffect(()=>{
    dispatch(fetchUsers());
  },[])

  useEffect(()=>{
    console.log(currUser);
  },[currUser])

  const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Title", field:"title" },
    { title: "Email", field: "email" },
  ];

  function handleEdit(event, rowData){
    setOpen(true);
    setFormType("edit");
    dispatch(setCurrentUser(rowData))
  }

  function handleDelete(event, rowData){
    dispatch(deleteUser(rowData.id))
  }

  function handleAdd(){
    setOpen(true);
    setFormType("add");
  }

  return (
    <>
    <MaterialTable title="User Management" columns={columns} data={usersData.map(item => Object.assign({}, item))} icons={tableIcons}
    actions={[
      {
        icon: tableIcons.Delete,
        tooltip: "Delete User",
        onClick: (event, rowData) => handleDelete(event, rowData),
      },
      {
        icon: tableIcons.Edit,
        tooltip: "Edit User",
        onClick: (event, rowData) => handleEdit(event, rowData),
      },
      {
        icon: tableIcons.Add,
        tooltip: "Add User",
        isFreeAction: true,
        onClick: () => handleAdd(),
      },
    ]}

    options={{ sorting: true }}
    />

    <FormDialog open={open} handleClose={handleClose} formType={formType}/>
    </>
  )
}
