import "./profile-popup.css";
import {useState} from "react";

const ProfilePopup = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className="profile-popup">
            <div className="profile-popup__logo" onClick={toggleMenu}>
                <img alt="logo" src="/defaultUser.jpg" width="48" height="48"/>
            </div>
            {isMenuVisible && (
                <div className="profile-popup__list">
                    <ul className="profile-popup__menu">
                        <li>Профиль</li>
                        <li>Настройки</li>
                        <li>Вход</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfilePopup;
