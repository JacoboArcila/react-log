import React from 'react';
import {Container} from './HomeStyles';
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <h1>Welcome</h1>
    </Container>
  )
}

export default Home