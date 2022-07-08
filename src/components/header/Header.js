import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Button, SearchForm, SearchInput, SearchButton} from './HeaderStyles';
import { useSearch } from '../../hooks/useSearch';

const Header = () => {
  const { handleSubmit, setSearchInput } = useSearch();
  return (
    <Container>
        <h2>Forms</h2>
        <SearchForm onSubmit={(e)=>handleSubmit(e)}>
        <SearchInput onChange={(e)=> setSearchInput(e.target.value)}/>
        <SearchButton type="submit">
          ho
        </SearchButton>
        </SearchForm>
        <Link to="/register/signIn">
        
            <Button>Log out</Button>
        </Link>
    </Container>
  )
}

export default Header