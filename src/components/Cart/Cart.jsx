import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { selectTotalCount } from "../../redux/slices/cartSlice";

const Cart = () => {
  const totalCount = useSelector(selectTotalCount);

  return (
    <div
      className="relative cursor-pointer"
      // onClick={() => dispatch(toggleCart())}
    >
      <FaShoppingCart className="text-2xl text-gray-700 hover:text-indigo-600" />
      <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {totalCount}
      </span>
    </div>
  );
};

export default Cart;
