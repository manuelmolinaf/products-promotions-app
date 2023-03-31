
import NavBar from '../../components/navbar/navbar.component';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { OutletContainter } from './navigation.styles';


const Navigation = () => {

  return (

    <Fragment>
      <NavBar />

      <OutletContainter>
        <Outlet />
      </OutletContainter>

    </Fragment>
  )

}

export default Navigation