import React from 'react'
import { Outlet } from "react-router-dom";
import {Container} from './registerStyles';
import Particless from '../../components/particles/Particless';


const Register = () => {
  return (
    <Container>
        <Outlet />
        <Particless />
    </Container>
  )
}

export default Register