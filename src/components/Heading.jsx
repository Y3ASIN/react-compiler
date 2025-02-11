import PropTypes from "prop-types";

const Heading = ({ heading, length }) => {
  return (
    <div className="text-3xl text-center">
      {heading} : <span className="text-purple-700">{length}</span> -{" "}
      {Date.now()}{" "}
    </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Heading;
