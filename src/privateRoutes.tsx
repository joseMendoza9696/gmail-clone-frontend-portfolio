import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import localStorageService from './utils/localStorageService';

const PrivateRoutes = () => {
  const jwttoken = localStorageService.getItem('jwt_token');
  const auth = { token: jwttoken };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
