import React, { useState, useEffect, useReducer } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';

const emailReducer = (state, action) => {

  if (action.type === 'USER_INPUT') 
  {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') 
  {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {

  if (action.type === 'USER_INPUT') 
  {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') 
  {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: false };
};

const Login = (props) => {

  const [enteredCollege, setEnteredCollege] = useState('');
  const [collegeIsValid, setCollegeIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });


  useEffect(() => {

    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid && collegeIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid, collegeIsValid]);


  const inputChangeHandler = (event, inputType) => {

    const value = event.target.value;

    if (inputType === 'EMAIL') 
    {
      dispatchEmail({ type: 'USER_INPUT', val: value });
    }
     else if (inputType === 'PASSWORD') 
     {
      dispatchPassword({ type: 'USER_INPUT', val: value });
    }
  };

  const validateEmailHandler = () => {

    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {

    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const collegeChangeHandler = (event) => {

    const collegeValue = event.target.value;
    setEnteredCollege(collegeValue);
    setCollegeIsValid(collegeValue.trim().length > 2);

    setFormIsValid(
      emailState.isValid && passwordState.isValid && collegeValue.trim().length > 2
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={(event) => inputChangeHandler(event, 'EMAIL')}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={(event) => inputChangeHandler(event, 'PASSWORD')}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
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
