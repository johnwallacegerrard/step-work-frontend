import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./src/assets/StepWorkIcon.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo-link">
        <img src={Logo} alt="header-logo" className="header__logo" />
        <h1 className="header__title">StepWork</h1>
      </Link>
    </div>
  );
}

export default Header;
