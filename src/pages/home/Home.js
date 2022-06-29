import React from 'react';
import {Container} from './HomeStyles';
import {useNavigate} from 'react-router-dom';
import useRequest from '../../hooks/useRequest';

const Home = () => {
  const navigate = useNavigate();

  const url = "https://api.github.com/users";
  const data = useRequest(url);

  return (
    <Container>
      {
        data &&
        data.map(i =>
          <div key={i.id}>
            <h1>{i.login}</h1>
            <img src={i.avatar_url} alt={i.login} />
            <div>
              <button onClick={()=> navigate(`/home/user/${i.login}`)}>Ver mas</button>
            </div>
          </div>
        )
      }
    </Container>
  )
}

export default Home