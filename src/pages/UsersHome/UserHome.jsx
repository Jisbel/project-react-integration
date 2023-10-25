import React from 'react';
import ImgPerfil from '../../components/Avatar/Avatar';
import Modal from '../../components/Modal/Modal';

function UserHome() {
  return (
    <div className="m-3">
      <div className="card" style={{ width: ' 18rem' }}>
        <ImgPerfil />
        <div className="card-body">
          <h5 className="card-title">Nombre Apellido</h5>
          <p className="card-text ">Direccion: Lorem ipsum dolor sit amet consectetur</p>
          <p className="card-text ">Telefono: 00000000</p>

          <div className="card-footer">
            <Modal />
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserHome;
