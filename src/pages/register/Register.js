import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Register = () => {
  return (
    <div>
        <Outlet />
        <p>¡ Bienvenido !</p>
        <p>Este es un buscador tipo facebook de usuarios de GITHUB</p>
        <p>Si no tienes cuenta, por favor regístrate.</p>
        <p>Después de registrarte, ingresa tus datos.</p>
        <Link to="/register/signUp">Sing Up</Link>
        <Link to="/register/signIn">Sing In</Link>
    </div>
  )
}

export default Register