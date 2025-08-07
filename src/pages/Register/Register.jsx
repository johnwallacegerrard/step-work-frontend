import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./Register.css";

function Registration() {
  const { handleRegisterSubmit } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastInitial, setLastInitial] = useState("");

  useEffect(() => {
    setFirstName(""), setLastInitial(""), setEmail(""), setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisterSubmit({ email, password, firstName, lastInitial });
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="first-name" className="register__form-label">
          First Name
          <input
            id="first-name"
            type="string"
            className="register__form-input"
            placeholder="First Name"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </label>
        <label htmlFor="last-name-initial" className="register__form-label">
          Last Initial
          <input
            id="last-name-initial"
            type="string"
            className="register__form-input"
            placeholder="Last Initial"
            maxLength={1}
            required
            onChange={(e) => {
              setLastInitial(e.target.value);
            }}
            value={lastInitial}
          />
        </label>
        <label htmlFor="email" className="register__form-label">
          Email
          <input
            id="email"
            type="email"
            className="register__form-input"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label htmlFor="password" className="register__form-label">
          Password
          <input
            id="password"
            type="password"
            className="register__form-input"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <div className="register__form-btns">
          <button type="submit" className="register__form-btn">
            Register
          </button>
          <Link
            to="/Login"
            className="register__form-btn register__form-btn_secondary"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Registration;
