import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import StyledLogin from "./StyledLogin";
import Spinner from "../StyledComponents/UI/Spinner/Spinner";

const Login = ({
  username,
  password,
  passwordChangeHandler,
  usernameChangeHandler,
  loginHandler,
  registerRedirectHandler,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  });

  let loginContent = <Spinner />;
  if (!loading)
    loginContent = (
      <StyledLogin password={password} username={username}>
        <form>
          <TextField
            className="username input"
            value={username}
            onChange={usernameChangeHandler}
            id="standard-error-helper-text"
            label="Username"
            required
            autoComplete="off"
          />

          <TextField
            className="password input"
            onChange={passwordChangeHandler}
            id="standard-error-helper-text"
            type="password"
            value={password}
            label="Password"
          />

          <Button
            className="btn"
            variant="contained"
            color="primary"
            onClick={loginHandler}
          >
            Log In
          </Button>

          <Button
            className="btn"
            variant="contained"
            color="primary"
            onClick={registerRedirectHandler}
          >
            SIGN UP
          </Button>
        </form>
      </StyledLogin>
    );
  return <>{loginContent}</>;
};

export default Login;
