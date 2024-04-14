import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

const Login = (props) => {
  const [enteredCollege, setEnteredCollege] = useState("");
  const [collegeIsValid, setCollegeIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        emailState.isValid && passwordState.isValid && collegeIsValid
      );
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid, collegeIsValid]);

  const inputChangeHandler = (event, inputType) => {
    const value = event.target.value;

    if (inputType === "EMAIL") {
      dispatchEmail({ type: "USER_INPUT", val: value });
    } else if (inputType === "PASSWORD") {
      dispatchPassword({ type: "USER_INPUT", val: value });
    }
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const collegeChangeHandler = (event) => {
    const collegeValue = event.target.value;
    setEnteredCollege(collegeValue);
    setCollegeIsValid(collegeValue.trim().length > 2);

    setFormIsValid(
      emailState.isValid &&
        passwordState.isValid &&
        collegeValue.trim().length > 2
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
    {
     authCtx.onLogin(emailState.value, passwordState.value, enteredCollege);
    }
    else if(!emailState.isValid)
    {
      emailInputRef.current.focus();
    }
    else
    {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={(event) => inputChangeHandler(event, "EMAIL")}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={(event) => inputChangeHandler(event, "PASSWORD")}
          onBlur={validatePasswordHandler}
        ></Input>
       
        
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
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
