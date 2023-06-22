import React, { useState } from 'react';
import { LoginForm, Label, Input, Button } from './Login.styles';

function Login() {
  const [email, setEmail] = useState(
    window.localStorage.getItem("email")
  );
  const [pass, setPass] = useState(
    window.localStorage.getItem('pass')
  );

  //localstorage
  const setLocalStorageEmail = value => {
    try {
      setEmail(value)
      window.localStorage.setItem('email', value)
    } catch (error) {
      console.log(error)
    }
  }

  const setLocalStoragePass = value => {
    try {
      setPass(value)
      window.localStorage.setItem('pass', value)
    } catch (error) {
      console.log(error)
    }
  }

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`email: ${email} Pass: ${pass}`);
  }

  return (
    <LoginForm>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input value={email} onChange={(e) => setLocalStorageEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" />
        <Label htmlFor="password">Password</Label>
        <Input value={pass} onChange={(e) => setLocalStoragePass(e.target.value)} type="password" placeholder='********' id="password" name="password" />
        <Button type="submit" >Log in</Button>
      </form>
    </LoginForm>
  )
}

export default Login;
