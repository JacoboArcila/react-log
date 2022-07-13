import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  SearchForm,
  SearchInput,
  SearchButton,
} from "./HeaderStyles";
import { useSearch } from "../../hooks/useSearch";
import useRequest from "../../hooks/useRequest";
import 'bootstrap/dist/css/bootstrap.min.css';
import Autosuggest from "react-autosuggest";

const Header = () => {

  const { handleSubmit, setSearchInput } = useSearch();
  const url = `https://api.github.com/users`;
  const user = useRequest(url);
  console.log(user)
  const [users, setUsers] = useState(user);
  const [value, setValue] = useState("");
  const [selecionado, setSeleccionado] = useState({});

  return (
    <Container>
      <h2>Forms</h2>
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <SearchInput
          placeholder="Buscar Usuario...."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </SearchForm>
      <Link to="/register/signIn">
        <Button>Log out</Button>
      </Link>

      
    </Container>
  );
};

export default Header;
