import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const StyledLogin = styled.div`
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

const Login = ({
  username,
  password,
  passwordChangeHandler,
  usernameChangeHandler,
  loginHandler,
}) => {
  return (
    <StyledLogin password={password} username={username}>
      <form>
        <TextField
          className="username input"
          onChange={usernameChangeHandler}
          value={username}
          id="standard-error-helper-text"
          label="Username"
          helperText={
            username.length > 2 ? "Valid!" : "Please type your username"
          }
        />
        <TextField
          className="password input"
          onChange={passwordChangeHandler}
          id="standard-error-helper-text"
          type="password"
          value={password}
          label="Password"
          helperText={
            password.length > 7 ? "Valid!" : "*At least 8 character..."
          }
        />

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
          // onClick={registerHandler}
        >
          Register
        </Button>
      </form>
    </StyledLogin>
  );
};

export default Login;
