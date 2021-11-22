import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/userList/UserList";

const App = (props) => {
  const [userList, changeUserList] = useState([
    { username: "Marc", age: "33", key: 2 },
    { username: "Laura", age: "35", key: 3 },
  ]);

  const onNewUser = (formData) => {
    changeUserList((userList) => {
      return [...userList, formData];
    });
  };

  return (
    <div className="App">
      <UserForm onNewUserHandler={onNewUser} />
      <UserList userList={userList} />
    </div>
  );
};

export default App;
