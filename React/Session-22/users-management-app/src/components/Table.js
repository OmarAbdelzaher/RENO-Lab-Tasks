import React, { useEffect, useState } from 'react'
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";
import FormDialog from './Dialog';


export default function UsersTable() {
  const [usersID, setUsersID] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [formType, setFormType] = useState("add");

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  };

  useEffect(()=>{
    fetch('https://dummyapi.io/data/v1/user?limit=100', {
      headers: {
        'app-id': '6315d7b2fd262fa0d52a512d'
      }
    })
    .then(response => response.json())
    .then(data => {
      data.data.map((user) => {
        setUsersID(usersID => [...usersID, user.id])
      })
      setIsFetched(true)
    })
  },[])

  useEffect(()=>{
    usersID.map((id) => {
      fetch(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          'app-id': '6315d7b2fd262fa0d52a512d'
        }
      })
      .then(response => response.json())
      .then(data => {
        setUsersData(usersData => [...usersData, data])
      })
    })
  },[isFetched])
  
  const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Gender", field:"gender" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Loaction", field: "location.country" },
  ];

  function handleEdit(rowData){
    setOpen(true);
    setFormType("edit");
  }

  function handleDelete(rowData){

  }

  function handleAdd(){
    setOpen(true);
    setFormType("add");
  }

  return (
    <>
    <MaterialTable title="User Management" columns={columns} data={usersData} icons={tableIcons}
    actions={[
      {
        icon: tableIcons.Delete,
        tooltip: "Delete User",
        onClick: (rowData) => handleDelete(rowData),
      },
      {
        icon: tableIcons.Edit,
        tooltip: "Edit User",
        onClick: (rowData) => handleEdit(rowData),
      },
      {
        icon: tableIcons.Add,
        tooltip: "Add User",
        isFreeAction: true,
        onClick: () => handleAdd(),
      },
    ]}
    
    // components={{
    //   Action: (props) => (
    //       <button onClick={(event) => props.action.onClick(event, props.data)}>
    //           Custom Delete Button
    //       </button>
    //   ),
    // }}

    options={{ sorting: true }}
    />

    <FormDialog open={open} handleClose={handleClose} formType={formType}/>
    </>
  )
}
