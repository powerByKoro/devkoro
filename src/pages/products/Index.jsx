import { useGetProductsQuery } from "../../api/productsApi";
import Product from "../../components/Products/Product";
import "./index.css";

const Products = () => {
  const {
    data: products = [],
    isLoading,
    isFetching, // Добавляем isFetching
    error,
  } = useGetProductsQuery();

  if (error) return <div>Error: {error.message}</div>;

  // Объединяем состояния загрузки
  const showSkeletons = isLoading || isFetching;

  return (
    <div className="home-page">
      <h1>Страница продуктов</h1>
      <div className="products">
        {showSkeletons
          ? Array.from({ length: 3 }).map((_, index) => (
              <Product key={`skeleton-${index}`} isLoading={true} />
            ))
          : products.map((product) => (
              <Product key={product.id} product={product} isLoading={false} />
            ))}
      </div>
    </div>
  );
};

export default Products;
