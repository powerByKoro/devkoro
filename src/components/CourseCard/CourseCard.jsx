import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  addItem,
  removeItem,
  selectIsItemInCart,
} from "../../redux/slices/cartSlice";

import "./course-card.css";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsItemInCart(course.id));

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: course.id,
        name: course.name,
        price: course.price,
        image: course.image,
      }),
    );
  };

  return (
    <div className={`courses__item ${isInCart ? "in-cart" : ""}`}>
      <div className="left-side">
        <img
          width="100px"
          height="100px"
          src={course.image}
          alt={course.name}
          className="character-image"
        />
      </div>
      <div className="right-side">
        <p>{course.name}</p>
        <p>
          {course.species} - {course.status}
        </p>
        <div className="price">{course.price} ₽</div>

        {isInCart ? (
          <button
            onClick={() => dispatch(removeItem(course.id))}
            className="cart-btn"
          >
            <FaTrash className="icon remove-btn" /> Удалить
          </button>
        ) : (
          <button onClick={handleAddToCart} className="cart-btn add-btn">
            <FaShoppingCart className="icon" /> В корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
