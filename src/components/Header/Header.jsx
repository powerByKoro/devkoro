import "./header.css";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        DevKoro.
      </div>
      <div className="navigation"></div>
      <Cart />
      <ProfilePopup />
    </div>
  );
};

export default Header;
