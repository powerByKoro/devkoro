import { Card, Flex, Skeleton } from "antd";

import "./product.css";

const Product = ({ isLoading, product }) => {
  return (
    <div className="product">
      <Flex gap="middle" align="start" vertical>
        <Card loading={isLoading} style={{ minWidth: 300 }}>
          <Card.Meta
            title={isLoading ? " " : product.name}
            description={
              isLoading ? (
                <>
                  <Skeleton paragraph={{ rows: 2 }} active />
                </>
              ) : (
                <>
                  <p>{product.description}</p>
                  <p>Цена: {product.price} ₽</p>
                </>
              )
            }
          />
        </Card>
      </Flex>
    </div>
  );
};

export default Product;
