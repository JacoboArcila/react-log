import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Input,
  Form,
  ContainerText,
  Button,
  Section,
  IconSpan,
} from "../SignStyles";
import Swal from "sweetalert2";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {Password} from '../signUp/SignUp';

const SignIn = ({ setIsLogged, formik }) => {
  const [signIn, setSignIn] = useState({ email: "l", password: "l" });
  const [control, setControl] = useState(false);

  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      signIn.email === formik.values.email &&
      signIn.password === formik.values.password
    ) {
      setIsLogged(true);
      navigate("/home");
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
        <Section>
          <IconSpan>
            <AlternateEmailIcon />
          </IconSpan>
          <Input
            placeholder="email"
            onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
          />
        </Section>
        <Section>
          <IconSpan>
            <Password control={control} setControl={setControl} />
          </IconSpan>
          <Input
            placeholder="password"
            type={control ? "text" : "password"}
            onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
          />
        </Section>
        <p className="error">
          {formik.errors.confirmPassword ? "Warning!" : null}{" "}
        </p>
        <ContainerText>
          <p>
            <input type="checkbox" /> Remember Account
          </p>
          <Button type="submit">Login</Button>
          <Link to="/register/signUp">Sing Up</Link>
        </ContainerText>
      </Form>
    </Container>
  );
};

export default SignIn;
