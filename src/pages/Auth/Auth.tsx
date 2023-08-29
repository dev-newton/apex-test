import Button from "components/Button/Button";
import Input from "components/Input/Input";
import useAuth from "hooks/useAuth";
import "./Auth.scss";

const { VITE__CREATE_TOKEN_URL } = import.meta.env;

const Auth = () => {
  const { token, handleChange, handleLogin } = useAuth();

  return (
    <>
      <div className="login">
        <div className="header">
          <h2>Please Add Github Access Token</h2>
          <small>It's a simpler version of Github OAuth Setup 😉</small>
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <label>Github Access Token</label>
            <p>
              You can create a token with <span>public_repo</span> permissions
              <a href={VITE__CREATE_TOKEN_URL} target="_blank">
                &nbsp; here
              </a>
            </p>
            <Input
              type="password"
              onChange={handleChange}
              placeholder="*******"
              value={token}
            />
            <Button
              label="Login"
              variant={token.length ? `primary` : `disabled`}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
