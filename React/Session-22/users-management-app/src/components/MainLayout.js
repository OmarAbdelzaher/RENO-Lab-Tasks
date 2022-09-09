import React from 'react'
import UsersTable from './Table';
import SwipeableTemporaryDrawer from './SideBar';

export default function MainLayout() {
  return (
    <>
      <UsersTable/>
      <SwipeableTemporaryDrawer/>  
    </>
  )
}
