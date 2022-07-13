import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  SearchForm,
  SearchInput,
  SearchButton,
  Sugerencia,
} from "./HeaderStyles";
import { useSearch } from "../../hooks/useSearch";
import useRequest from "../../hooks/useRequest";
import { Stack, Autocomplete, TextField } from "@mui/material";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

const Header = () => {

  const { handleSubmit, setSearchInput } = useSearch();
  const url = `https://api.github.com/users`;
  const user = useRequest(url);
  console.log(user)

  const [p , setP] = useState("");

  return (
    <Container>
      <h2>Forms</h2>
      {/* <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <SearchInput
          placeholder="Buscar Usuario...."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm> */}
      <Link to="/register/signIn">
        <Button>Log out</Button>
      </Link>
      {
        user && 
        <Autocomplete 
          options={user.map(u => {
      return u.login
    })}
          renderInput={(params) => (
            <SearchForm onSubmit={(e) => handleSubmit(e)}>
              <TextField onClick={(e) => setSearchInput(e.target.value)} onChange={(e) => setSearchInput(e.target.value)} {...params} label="Usuarios" />
              <SearchButton type="submit">Buscar</SearchButton>
            </SearchForm>
            )}
        />
      }
    </Container>
  );
};

export default Header;
