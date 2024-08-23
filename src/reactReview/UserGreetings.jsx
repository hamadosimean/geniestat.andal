import React from "react";
import PropTypes from "prop-types";
function UserGreetings(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>Welcome back {props.username}</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

UserGreetings.prototypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreetings.defaultProps = {
  isLoggedIn: true,
  username: "Guest",
};

export default UserGreetings;
