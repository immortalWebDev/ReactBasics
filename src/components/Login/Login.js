import React, { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredCollege, setEnteredCollege] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {

    const isEmailValid = enteredEmail.includes('@');
    const isPasswordValid = enteredPassword.trim().length > 6;
    const isCollegeValid = enteredCollege.trim().length > 2;

    const identifier = setTimeout(() => {
      console.log("Checking from validity")
      setFormIsValid(isEmailValid && isPasswordValid && isCollegeValid);
    },500)

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };

    
  }, [enteredEmail, enteredPassword, enteredCollege]);

  const inputChangeHandler = (event, setInputState) => {
    const value = event.target.value;
    setInputState(value);
  };


  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => {
  //     console.log('EFFECT CLEANUP');
  //   };
  // }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={(event) => inputChangeHandler(event, setEnteredEmail)}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={(event) => inputChangeHandler(event, setEnteredPassword)}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={(event) => inputChangeHandler(event, setEnteredCollege)}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
