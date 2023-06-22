import React, { useState } from 'react';
import { RegistForm, Label, Input, Button } from './Register.styles';

function Register() {
  const [email, setEmail] = useState(
    window.localStorage.getItem("email")
  );
  const [pass, setPass] = useState(
    window.localStorage.getItem('pass')
  );
  const [name, setName] = useState(
    window.localStorage.getItem('name')
  );


  //localstorage
  const setLocalStorageName = value => {
    try {
      setName(value)
      window.localStorage.setItem('name', value)
    } catch (error) {
      console.log(error)
    }
  }

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
    console.log(`Name: ${name} email: ${email} Pass: ${pass}`);
  }

  return (
    <RegistForm>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Full name</Label>
        <Input value={name} onChange={(e) => setLocalStorageName(e.target.value)} type="name" placeholder='Full name' id="name" name="name" />
        <Label htmlFor="email">email</Label>
        <Input value={email} onChange={(e) => setLocalStorageEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id="email" name="email" />
        <Label htmlFor="password">Password</Label>
        <Input value={pass} onChange={(e) => setLocalStoragePass(e.target.value)} type="password" placeholder='********' id="password" name="password" />
        <Button type="submit" >Sign up</Button>
      </form>
    </RegistForm>
  )
}

export default Register;
