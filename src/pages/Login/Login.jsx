import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const { handleSigninSubmit } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(""), setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSigninSubmit({ email, password });
  };

  return (
    <div className="login">
      <form className="login__form">
        <label htmlFor="email" className="login__form-label">
          Email
          <input
            id="email"
            type="email"
            className="login__form-input"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label htmlFor="password" className="login__form-label">
          Password
          <input
            id="password"
            type="password"
            className="login__form-input"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <div className="login__form-btns">
          <button
            onClick={handleSubmit}
            type="submit"
            className="login__form-btn"
          >
            Sign In
          </button>
          <Link
            to="/register"
            className="login__form-btn login__form-btn_secondary"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
