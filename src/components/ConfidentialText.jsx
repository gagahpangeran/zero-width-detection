import React from "react";
import PropTypes from "prop-types";

//const ConfidentialText = ({ heading, username, text }) => (
const ConfidentialText = ({ heading, username }) => (
  /*
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <p className="lead">
        {heading}
        {username}
      </p>
    </div>
  </div>
  */
  <input
    type="text"
    className="form-control"
    aria-label="Username"
    value={heading + username}
  />
);

ConfidentialText.propTypes = {
  heading: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
  //text: PropTypes.string.isRequired,
};

export default ConfidentialText;
