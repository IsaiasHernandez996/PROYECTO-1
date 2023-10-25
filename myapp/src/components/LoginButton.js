import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Button';
import Navbar from './Navbar';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();


  <Navbar/>
  return (
    <Button buttonStyle='btn--outline' onClick={loginWithRedirect}>
      Iniciar Sesion
    </Button>
  );
};

export default LoginButton;