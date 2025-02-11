import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Product List - {Date.now()}</h1>

        {products.map((product, index) => (
          <div key={index}>
            {product.image} {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
