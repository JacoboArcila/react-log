import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Input, Form, ContainerText, Button } from "../SignStyles";
import Swal from "sweetalert2";

const SignUp = ({ formik }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  /* const handlerSubmit = (e) => {
    let value = {
      name,
      email,
      password,
    };
    if (name === "" || email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in all the fields!",
      });
    } else {
      navigate("/signIn");
      userRegistry(value);
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
        title: "Successfully registered",
      });
    }
    e.preventDefault();
  }; */
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>
        <Input
          placeholder="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Input
          placeholder="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          placeholder="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <ContainerText>
          <p>
            <input type="checkbox" /> I read and agree to{" "}
            <span> Terms & Conditions </span>
          </p>
          <Button type="submit">Create Account</Button>
          <p>
            Alredy have an account? <Link to="/signIn">Sing In</Link>
          </p>
        </ContainerText>
      </Form>
    </Container>
  );
};

export default SignUp;
