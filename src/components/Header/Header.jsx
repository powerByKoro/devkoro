import "./header.css";
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
import ProfilePopup from "../ProfilePopup/ProfilePopup";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="logo">DevKoro.</div>
      <div className="navigation">
        <div className="navigation__item">
          <Link to={"/"}>
            <Button currentPath={location.pathname} path="/" text="Домой" />
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/profile">
            <Button
              currentPath={location.pathname}
              path="/profile"
              text="Профиль"
            />
          </Link>
        </div>
      </div>
      <ProfilePopup />
    </div>
  );
};

export default Header;
