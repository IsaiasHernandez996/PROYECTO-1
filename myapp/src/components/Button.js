import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize
}) => {
  const { loginWithRedirect } = useAuth0();
  const checkButtonStyle = buttonStyle ? buttonStyle : 'btn--primary';
  const checkButtonSize = buttonSize ? buttonSize : 'btn--medium';
  
  return (
    <Link to='/signup' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => loginWithRedirect()}
        type={type}
      >
  {children}
</button>

    </Link>
  );
};
