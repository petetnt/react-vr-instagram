import React from "react";
import { string } from "prop-types";
import { connect } from "react-redux";

import ButtonView from "../ButtonView";
import ImageView from "../ImageView";

const RouteSelect = ({ username }) => {
  if (username) {
    return <ImageView />;
  }

  return <ButtonView />;
};

RouteSelect.propTypes = {
  username: string,
};

RouteSelect.defaultProps = {
  username: null,
};

const mapStateToProps = ({ username: { username } }) => ({
  username,
});

export default connect(mapStateToProps)(RouteSelect);
