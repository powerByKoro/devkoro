import "./header.css";
import ProfilePopup from "../ProfilePopup/ProfilePopup";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">DevKoro.</div>
      <div className="navigation"></div>
      <ProfilePopup />
    </div>
  );
};

export default Header;
