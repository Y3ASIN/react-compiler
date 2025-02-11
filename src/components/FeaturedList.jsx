import PropTypes from "prop-types";

const FeaturedList = ({ featured }) => {
  
  return (
    <div>
      <h1 className="text-3xl">Featured List - {Date.now()}</h1>
      <ul>
        {featured.map((product, index)=>
        <li key={index}>
           {product.image} {product.name}
        </li>
        )}
      </ul>
    </div>
  );
};

FeaturedList.propTypes = {
  featured: PropTypes.array,
};

export default FeaturedList;
