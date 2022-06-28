import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Button} from './HeaderStyles';

const Header = () => {
  return (
    <Container>
        <h2>Forms</h2>
        <Link to="/register/signIn">
            <Button>Log out</Button>
        </Link>
    </Container>
  )
}

export default Header