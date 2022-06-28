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
import Layout from "./components/Layout/Layout";
import Swal from "sweetalert2";

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
    },
  });

  return (
    <BrowserRouter>
    <Layout>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} >
          <Route path="/register/signIn" element={<SignIn formik={formik} setIsLogged={setIsLogged} />} />
          <Route path="/register/signUp" element={<SignUp formik={formik} />} />
        </Route>
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
