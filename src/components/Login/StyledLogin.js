import styled from "styled-components";
const StyledLogin = styled.div`
  padding: 20px;
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

export default StyledLogin;
