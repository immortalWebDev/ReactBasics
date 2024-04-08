import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const goalInputChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredValue(value);
    setIsInvalid(value.trim().length === 0); // Set isInvalid to true if input is empty
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInvalid(true); // Set isInvalid to true if input is empty on form submission
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(''); // Clear input after submitting
    setIsInvalid(false); // Reset isInvalid state
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isInvalid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" isInvalid={isInvalid}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
