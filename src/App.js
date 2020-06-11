import React, { useState } from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Update from "./components/Update/Update";
import User from "./components/User/User";

import StyledApp, { GlobalStyle } from "./StyledApp";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const history = useHistory();

  const nameChangeHandler = (e) => {
    setName(e.target.value.trim());
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value.trim());
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value.trim());
  };

  const dateChangeHandler = (date) => {
    setSelectedDate(date);
  };

  const loginHandler = () => {
    const user = {
      username: username,
      password: password,
    };

    axios
      .post("https://dancebug.com/rest/test/login.php", qs.stringify(user))
      .then((response) => {
        setMessage(response.data.message.slice(0, -1).toUpperCase());
        if (response.data.status === 1) {
          window.localStorage.setItem(username, response.data.token);
          setUser(response.data.user);
          history.push("/user");
        }
      })
      .catch((err) => setError("Opps!! Something went wrong!"));
  };

  const registerHandler = () => {
    const user = {
      name: name,
      username: username,
      password: password,
      dob: selectedDate.toString().split(" ").slice(1, 4).join("-"),
    };
    // This condition overrides server's response message!!
    // if (password.length > 3 && username.length > 3 && name.length > 3) {
    axios
      .post("https://dancebug.com/rest/test/register.php", qs.stringify(user))
      .then((response) => {
        setMessage(response.data.message.slice(0, -21).toUpperCase());
        if (response.data.status === 1) {
          setUser(user);
          history.push("/user");
        }
      })
      .catch((err) => setError("Opps!! Something went wrong!"));
    // } else {
    //   setMessage("FORM INVALID!");
    // }
  };

  const updateHandler = () => {
    const user = {
      name: name,
      username: username,
      password: password,
      dob: selectedDate.toString().split(" ").slice(1, 4).join("-"),
      token: window.localStorage.getItem(username),
    };

    axios
      .post("https://dancebug.com/rest/test/update.php", qs.stringify(user))
      .then((response) => {
        setMessage(
          // Misspelled word corrected succesfully :)
          response.data.message
            .slice(0, -1)
            .toUpperCase()
            .split(" ")
            .map((m) => (m === "WORNG" ? (m = "WRONG") : m))
            .join(" ")
        );
        if (response.data.status === 1) {
          setUser(user);
        }
      })
      .catch((err) => setError("Opps!! Something went wrong!"));
  };

  const logOutHandler = () => {
    setName("");
    setUsername("");
    setPassword("");
    setMessage("");
    history.push("/");
  };

  const registerRedirectHandler = () => {
    setName("");
    setUsername("");
    setMessage("");
    setPassword("");
    history.push("/register");
  };

  const homepageRedirectHandler = () => {
    setName("");
    setUsername("");
    setMessage("");
    setPassword("");
    history.push("/");
  };

  const updateRedirectHandler = () => {
    history.push("/update");
  };

  return (
    <StyledApp name={name} password={password} username={username}>
      <GlobalStyle />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Login
              error={error}
              username={username}
              password={password}
              loginHandler={loginHandler}
              passwordChangeHandler={passwordChangeHandler}
              registerRedirectHandler={registerRedirectHandler}
              usernameChangeHandler={usernameChangeHandler}
            />
          )}
        />
        <Route
          path="/register"
          render={() => (
            <Register
              error={error}
              username={username}
              password={password}
              loginHandler={loginHandler}
              passwordChangeHandler={passwordChangeHandler}
              usernameChangeHandler={usernameChangeHandler}
              name={name}
              selectedDate={selectedDate}
              nameChangeHandler={nameChangeHandler}
              registerHandler={registerHandler}
              dateChangeHandler={dateChangeHandler}
              homepageRedirectHandler={homepageRedirectHandler}
            />
          )}
        />
        <Route
          path="/update"
          render={() => (
            <Update
              error={error}
              username={username}
              password={password}
              loginHandler={loginHandler}
              passwordChangeHandler={passwordChangeHandler}
              usernameChangeHandler={usernameChangeHandler}
              name={name}
              selectedDate={selectedDate}
              nameChangeHandler={nameChangeHandler}
              updateHandler={updateHandler}
              homepageRedirectHandler={homepageRedirectHandler}
              dateChangeHandler={dateChangeHandler}
            />
          )}
        />
        <Route
          path="/user"
          render={() => (
            <User
              user={user}
              updateRedirectHandler={updateRedirectHandler}
              logOutHandler={logOutHandler}
            />
          )}
        />
      </Switch>
      <p className="message">{message}</p>
    </StyledApp>
  );
};

export default App;
