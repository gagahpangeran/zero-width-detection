import React from 'react';
import PropTypes from 'prop-types';

const PlainText = ({ handleChange }) => (
  <div className="input-group input-group-lg">
    <input
      onChange={handleChange}
      type="text"
      className="form-control"
      aria-label="Username"
    />
  </div>
);

PlainText.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PlainText;
