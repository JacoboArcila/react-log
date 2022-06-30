import React from "react";
import { Container, ContainerUser, H1 } from "./HomeStyles";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const Home = () => {
  const navigate = useNavigate();

  const url = "https://api.github.com/users";
  const data = useRequest(url);

  return (
    <div>
      <H1>Users</H1>
      <Container>
      {data &&
        data.map((i) => (
          <ContainerUser key={i.id}>
            <h3 className="name">{i.login}</h3>
            <div className="contenedor">
              <a href="#">
                <figure>
                  <img src={i.avatar_url} alt={i.login} />
                  <div className="capa">
                    <button onClick={()=> navigate(`/home/user/${i.login}`)}>Ver mas</button>
                  </div>
                </figure>
              </a>
            </div>
          </ContainerUser>
        ))}
    </Container>
    </div>
  );
};

export default Home;
