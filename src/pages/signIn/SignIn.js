import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {Container, Input, Form, ContainerText, Button} from '../SignStyles';
import Swal from "sweetalert2";

const SignIn = ({ setIsLogged, userInfo }) => {
  const [signIn, setSignIn] = useState({ email: "l", password: "l" });
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      signIn.email === userInfo.email &&
      signIn.password === userInfo.password
    ) {
      setIsLogged(true);
      navigate("/react-log/home");
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to login!",
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handlerSubmit}>
        <h1>Sign In</h1>
        <Input
          placeholder="email"
          onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
        />
        <Input
          placeholder="password"
          onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
        />
        <ContainerText>
          <p><input type="checkbox" /> Remember Account</p>
          <Button type="submit">Login</Button>
          <Link to="/react-log/signUp">Sing Up</Link>
        </ContainerText>
      </Form>
    </Container>
  )
}

export default SignIn