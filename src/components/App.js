import React from "react";
import "../styles/App.css";
import UserList from "./UserList";
import Counter from "./Counter";

// DRY => Dont Repeat Yourself
function App({ users }) {
  return (
    <>
      <Counter />

      <UserList users={users} />
    </>
  );
}

export default App;
