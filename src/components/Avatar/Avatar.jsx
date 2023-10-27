import React from 'react';
import perfil from '../../img/perfil.jpeg';

function ImgPerfil() {
  return (
    <div>
      <img src={perfil} className="rounded-circle mt-2" alt="imagen de perfil" />
    </div>
  );
}

export default ImgPerfil;
