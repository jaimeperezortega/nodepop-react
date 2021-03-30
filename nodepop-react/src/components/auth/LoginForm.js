

import React from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';

import './LoginForm.css';

function LoginForm() {
  return (
    <form className="loginForm">
      <FormField
        type="text"
        name="email"
        label="email"
        className="loginForm-field"
      />
      <FormField
        type="password"
        name="password"
        label="contraseña"
        className="loginForm-field"
      />
      <Button type="submit" className="loginForm-submit" variant="primary">
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;
