import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GlobalStyles from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import SignIn from "./pages/register/signIn/SignIn";
import SignUp from "./pages/register/signUp/SignUp";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} >
          <Route path="/register/signIn" element={<SignIn setIsLogged={setIsLogged} />} />
          <Route path="/register/signUp" element={<SignUp formik={formik} />} />
        </Route>
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
