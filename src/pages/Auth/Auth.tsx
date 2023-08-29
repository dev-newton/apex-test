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
              Copy and paste this token <span>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</span> in the field below to login
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
