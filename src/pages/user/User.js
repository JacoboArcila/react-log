import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import {Container, Span, Img, Name, P, ContainerText, Button} from './UserStyles';

const User = () => {
    const navigate = useNavigate();
    const { login } = useParams();
    const url = `https://api.github.com/users/${login}`;
    const user = useRequest(url)
  return (
    <>
        {
            user &&
            <Container>
                <div>
                  <Name>{user.login}</Name>
                  <Img src={user.avatar_url} alt={user.login} />
                </div>
                <ContainerText>
                  <P><Span>Name:</Span> {user.name}</P>
                  <P><Span>URL GitHub:</Span> <a href={user.url}>{user.login}</a></P>
                  <P><Span>Location:</Span> {user.location}</P>
                  {user.company === null ? null : <P><Span>Company:</Span> {user.company}</P>}
                  {user.bio === null ? null : <P><Span>Bio:</Span> {user.bio}</P>}
                  
                </ContainerText>
            </Container>
          }
          <Button onClick={() => navigate('/home')} >Volver</Button>
    </>
  )
}

export default User