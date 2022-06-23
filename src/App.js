import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn setIsLogged={setIsLogged} userInfo={userInfo} />} />
        <Route path="/signUp" element={<SignUp setIsLogged={setIsLogged} userRegistry={handlerUserRegistry} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />} >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
