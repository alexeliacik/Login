import React, { useEffect, useState } from "react";
// import Login from "./components/Login";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const GlobalStyle = createGlobalStyle`
  *,*::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 100%;  /* 1rem = 10px */
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const StyledApp = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(40, 53, 147, 0.6);
  margin-top: 30px;
  padding-bottom: 40px;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    .input {
      width: 100%;
      p {
        font-size: 10px;
        transition: all 0.2s;
      }
      margin-bottom: 1rem;
    }

    .name {
      color: ${({ name }) => (name.length > 0 ? "red" : "yellow")};
    }

    .username {
      color: ${({ username }) => (username.length > 0 ? "red" : "yellow")};
    }

    .password {
      color: ${({ password }) => (password.length > 0 ? "red" : "yellow")};
    }

    .btn {
      margin-top: 10px;
      width: 100%;
    }
  }
`;

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {}, []);

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
      .post("https://dancebug.com/rest/test/login.php", user)
      .then((response) => console.log(response));
  };

  const registerHandler = () => {
    const user = {
      name: name,
      username: username,
      password: password,
      dob: selectedDate,
    };

    axios
      .post("https://dancebug.com/rest/test/update.php", JSON.stringify(user))
      .then((response) => console.log(response));
  };

  return (
    <StyledApp name={name} password={password} username={username}>
      <GlobalStyle />
      {/* <Login
        username={username}
        password={password}
        loginHandler={loginHandler}
        passwordChangeHandler={passwordChangeHandler}
        usernameChangeHandler={usernameChangeHandler}
      /> */}
      <form>
        <TextField
          className="name input"
          onChange={nameChangeHandler}
          value={name}
          required
          id="standard-error-helper-text"
          label="Name"
          helperText={name.length > 2 ? "Valid!" : "Please type your name"}
        />

        <TextField
          className="username input"
          value={username}
          onChange={usernameChangeHandler}
          id="standard-error-helper-text"
          label="Username"
          required
          helperText={
            username.length > 2 ? "Valid!" : "Please type your username"
          }
        />
        <TextField
          className="password input"
          onChange={passwordChangeHandler}
          id="standard-error-helper-text"
          value={password}
          type="password"
          label="Password"
          required
          helperText={
            password.length > 7 ? "Valid!" : "*At least 8 character..."
          }
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className="input"
            value={selectedDate}
            onChange={dateChangeHandler}
          />
        </MuiPickersUtilsProvider>

        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={loginHandler}
        >
          Login
        </Button>

        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={registerHandler}
        >
          Register
        </Button>
      </form>
    </StyledApp>
  );
};

export default App;
