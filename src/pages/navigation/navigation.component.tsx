
import NavBar from '../../components/navbar.component';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Fragment } from 'react';


const Navigation = () => {

  return (

    <Fragment>
      <NavBar />

      <Outlet />

    </Fragment>
  )

}

export default Navigation