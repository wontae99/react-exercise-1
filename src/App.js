import React, { useState, Fragment } from "react";

import UserInput from "./components/Users/UserInput/UserInput";
import UserList from "./components/Users/UserList/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { name: "WONTAE", age: "26", id: Math.random().toString() },
  ]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUsers((prevUsers) => {
      const registeredUsers = [...prevUsers];
      registeredUsers.unshift({
        name: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
      });
      return registeredUsers;
    });
  };

  const deleteItemHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedGoals = prevUsers.filter((user) => user.id !== userId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No Users Found.</p>;

  if (users.length > 0) {
    content = <UserList items={users} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <Fragment>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler}></UserInput>
      </section>
      <section id="users">{content}</section>
    </Fragment>
  );
};

export default App;
