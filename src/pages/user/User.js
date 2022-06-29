import React from 'react'
import { useParams, Link } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';

const User = () => {
    const { login } = useParams();
    const url = `https://api.github.com/users/${login}`;
    const user = useRequest(url)

  return (
    <div>
        {
            user &&
            <div>
                <h1>{user.login}</h1>
                <img src={user.avatar_url} alt={user.login} />
                <div>
                    <Link to="/home">Volver</Link>
                </div>
            </div>
          }
    </div>
  )
}

export default User