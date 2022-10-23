import React, { useState, useRef } from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../Error/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const nameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;
    if (
      nameInput.trim().length === 0 ||
      ageInput.trim().toString().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+ageInput < 1) {
      // Ensure enteredAge to be a number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(nameInput, ageInput);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
