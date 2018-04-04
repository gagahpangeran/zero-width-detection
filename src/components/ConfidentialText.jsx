import React from 'react';
import PropTypes from 'prop-types';

//const ConfidentialText = ({ heading, username, text }) => (
const ConfidentialText = ({ heading, username }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <p className="lead">
        {heading}
        {username}
      </p>
    </div>
  </div>
);

ConfidentialText.propTypes = {
  heading: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  //text: PropTypes.string.isRequired,
};

export default ConfidentialText;
