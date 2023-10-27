import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import ImgPerfil from '../../components/Avatar/Avatar';
import Modal from '../../components/Modal/Modal';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

function UserHome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  const wrapperCards = () => {
    // eslint-disable-next-line array-callback-return
    const mapping = [];
    // eslint-disable-next-line array-callback-return
    user.map(() => {
      mapping.push(
        <div className="m-3 card" style={{ width: ' 18rem' }}>
          <ImgPerfil />
          <div className="card-body">
            <h5 className="card-title">Nombre Apellido</h5>
            <p className="card-text ">Direccion: Lorem ipsum dolor sit amet consectetur</p>
            <p className="card-text ">Telefono: 00000000</p>

            <div className="card-footer">
              <Modal />
            </div>
          </div>
        </div>,
      );
    });
    return mapping;
  };

  return (
    <div className="wrapper">
      {wrapperCards()}
    </div>
  );
}

export default UserHome;
