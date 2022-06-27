import React, { useState } from 'react';
import {useFormik} from 'formik'
import GlobalStyles from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import NotFound from './pages/notFound/NotFound';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlerUserRegistry = ({ name, email, password }) => {
    setUserInfo({ name: name, email: email, password: password });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });


  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/signIn" element={<SignIn setIsLogged={setIsLogged} userInfo={userInfo} />} />
        <Route path="/signUp" element={<SignUp formik={formik} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
