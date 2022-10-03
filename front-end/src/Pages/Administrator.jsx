import React from 'react';
import Header from '../components/headerAdmin';
import ListUser from '../components/listUser';
import RegisterUserByAdm from '../components/registerUserByAdm';

function Administrator() {
  return (
    <div>
      <Header />
      <RegisterUserByAdm />
      <ListUser />
    </div>
  );
}

export default Administrator;
