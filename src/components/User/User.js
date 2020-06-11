import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import StyledUser from "./StyledUser";

import Spinner from "../StyledComponents/UI/Spinner/Spinner";

const User = ({ user, updateRedirectHandler, logOutHandler }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  });

  let userContent = <Spinner />;
  if (!loading)
    userContent = (
      <StyledUser>
        <h1>Welcome "{user.name}!"</h1>
        <h1>Nice to see you!</h1>
        <p>
          Username: <strong>{user.username}</strong>
        </p>
        <p>
          Date of birth: <strong>{user.dob}</strong>
        </p>

        <Button
          className="btn btn-first"
          variant="contained"
          color="primary"
          onClick={updateRedirectHandler}
        >
          Update
        </Button>

        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={logOutHandler}
        >
          Log Out
        </Button>
      </StyledUser>
    );
  return <>{userContent}</>;
};

export default User;
