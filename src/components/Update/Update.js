import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import StyledUpdate from "./StyledUpdate";
import Spinner from "../StyledComponents/UI/Spinner/Spinner";

const Update = ({
  name,
  username,
  password,
  selectedDate,
  nameChangeHandler,
  passwordChangeHandler,
  usernameChangeHandler,
  updateHandler,
  dateChangeHandler,
  homepageRedirectHandler,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  });

  let updateContent = <Spinner />;
  if (!loading)
    updateContent = (
      <StyledUpdate name={name} password={password} username={username}>
        <form>
          <TextField
            className="name input"
            onChange={nameChangeHandler}
            value={name}
            required
            id="standard-error-helper-text"
            label="Name"
            helperText={name.length > 2 ? "Valid!" : "Please type your name"}
            autoComplete="off"
          />

          <TextField
            className="username input"
            value={username}
            onChange={usernameChangeHandler}
            id="standard-error-helper-text"
            label="Username"
            required
            autoComplete="off"
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
            onClick={updateHandler}
          >
            Update
          </Button>

          <Button
            className="btn"
            variant="contained"
            color="primary"
            onClick={homepageRedirectHandler}
          >
            Log Out
          </Button>
        </form>
      </StyledUpdate>
    );
  return <>{updateContent}</>;
};

export default Update;
