import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import FormDialog from './Dialog';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { setCurrentUser, fetchUsers, deleteUser, toggleMenu } from '../store/users/users.actions';

export default function UsersTable() {
  const [usersData, setUsersData] = useState([]);
  const [formType, setFormType] = useState("add");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.data);
  const menuHidden = useSelector(({ users }) => users.menuHidden);

  useEffect(() => {
    if (users !== null) {
      setUsersData([...users]);
    }
  }, [users]);

  function handleClose() {
    setOpen(false);
  };

  useEffect(()=>{
    dispatch(fetchUsers());
  },[])

  const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Title", field:"title" },
    { title: "Email", field: "email" },
  ];

  function handleEdit(event, rowData){
    dispatch(setCurrentUser(rowData))
    setFormType("edit");
    setOpen(true);
  }

  function handleDelete(event, rowData){
    dispatch(deleteUser(rowData.id))
  }

  function handleAdd(){
    setOpen(true);
    setFormType("add");
  }

  function handleSideBar(){
    console.log("handleSideBar")
    dispatch(toggleMenu(!menuHidden))
  }

  return (
    <>
    <MenuRoundedIcon onClick={handleSideBar}/>
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
