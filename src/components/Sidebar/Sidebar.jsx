import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaFlag,
  FaFolder,
  FaTasks,
} from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isSidebarCollapsed ? "sidebar_collapsed" : ""}`}>
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="sidebar__toggle"
      >
        {isSidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      <div className="sidebar__header">
        <div className="profile__logo">LOGO</div>
        {!isSidebarCollapsed && <div className="title">@devKoro. 1930</div>}
      </div>
      <div className="sidebar__body">
        <div onClick={() => navigate("/projects")} className="sidebar__item">
          <FaFolder />
          {!isSidebarCollapsed && <div>Проекты</div>}
        </div>
        <div onClick={() => navigate("/tasks")} className="sidebar__item">
          <FaTasks />
          {!isSidebarCollapsed && <div>Задачи</div>}
        </div>
        <div onClick={() => navigate("/milestones")} className="sidebar__item">
          <FaFlag />
          {!isSidebarCollapsed && <div>Спринты</div>}
        </div>
        <div onClick={() => navigate("/settings")} className="sidebar__item">
          <FaCog />
          {!isSidebarCollapsed && <div>Настройки</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
