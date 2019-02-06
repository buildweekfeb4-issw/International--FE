import React from 'react';

import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const SignIn = props => {
  return (
    <div>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
};

export default SignIn;