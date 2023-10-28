import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import ModalProfile from '../../components/Modal/Modal';
import ImgPerfil from '../../components/Avatar/Avatar';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

function UserHome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  if (!user) return null;

  const wrapperCards = () => {
    // eslint-disable-next-line array-callback-return
    const mapping = [];
    // eslint-disable-next-line array-callback-return

    for (let i = 0; i < user.length; i += 1) {
      mapping.push(
        <div className="card-group">
          <div className="m-3 card" style={{ width: ' 18rem' }}>
            <ImgPerfil />
            <div className="card-body">
              <h5 className="card-title">{user[i].name}</h5>
              <p className="card-text ">
                Direccion:
                {' '}
                {user[i].address?.city}
              </p>
              <p className="card-text ">
                Telefono:
                {' '}
                {user[i].phone}
              </p>

              <div className="card-footer">
                <ModalProfile user={user[i]} />

              </div>
            </div>
          </div>
        </div>,
      );
    }
    return mapping;
  };

  return (
    <div className="wrapper">
      {wrapperCards()}
    </div>
  );
}

export default UserHome;
