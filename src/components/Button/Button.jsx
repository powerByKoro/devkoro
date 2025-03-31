import "./button.css";

const Button = ({ currentPath, path, text = "Кнопка" }) => {
  const isActive =
    currentPath === path || (path !== "/" && currentPath.startsWith(path));

  return (
    <div>
      <button className={`button  ${isActive ? "button_active" : ""}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
