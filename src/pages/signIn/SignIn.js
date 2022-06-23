import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';

const SignIn = ({ setIsLogged, userInfo }) => {
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      signIn.email === userInfo.email &&
      signIn.password === userInfo.password
    ) {
      setIsLogged(true);
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="email"
          onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
        />
        <input
          placeholder="password"
          onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
        />
        <Link to="/singup">Sing In</Link>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default SignIn