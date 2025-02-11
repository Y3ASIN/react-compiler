import PropTypes from "prop-types";

import Heading from "./Heading";
import ProductList from "./ProductList";
import FeaturedList from "./FeaturedList";

const ProductPage = ({ heading, products }) => {
  const featuredList = products.filter((product) => product.featured);
  const totalProducts = products.length;

  return (
    <div className="space-y-4">
      <Heading heading={heading} length={totalProducts} />

      <ProductList products={products} />

      <FeaturedList featured={featuredList} />
    </div>
  );
};

ProductPage.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.array,
};

export default ProductPage;
