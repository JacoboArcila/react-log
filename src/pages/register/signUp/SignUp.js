import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Input,
  Form,
  ContainerText,
  Button,
  Section,
  IconSpan,
} from "../SignStyles";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const SignUp = ({ formik }) => {
  const [control, setControl] = useState(false);
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>
        <Section>
          <IconSpan>
            <PersonIcon />	
          </IconSpan>
          <Input
            placeholder="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Section>
        <Section>
          <IconSpan>
            <AlternateEmailIcon />
          </IconSpan>
          <Input
            placeholder="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Section>
        <Section>
          <IconSpan>
            <Password control={control} setControl={setControl} />
          </IconSpan>
          <Input
            placeholder="password"
            type={control ? "text" : "password"}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Section>
        <Section>
          <IconSpan>
            <Password control={control} setControl={setControl} />
          </IconSpan>
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type={control ? "text" : "password"}
            onChange={formik.handleChange}
          />
        </Section>
        <ContainerText>
          <p>
            <input type="checkbox" /> I read and agree to
            <span> Terms & Conditions </span>
          </p>
          <Button onClick={() => console.log("click")} type="submit">Create Account</Button>
          <p>
            Alredy have an account? <Link to="/register/signIn">Sing In</Link>
          </p>
        </ContainerText>
      </Form>
    </Container>
  );
};

export default SignUp;


export function Password({ control, setControl }){
  if (!control) {
    return <LockIcon onClick={()=> setControl(control => !control)}/>
  } else {
    return <LockOpenIcon onClick={()=> setControl(control => !control)}/>
  }
}