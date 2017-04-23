import React from "react";
import { View } from "react-vr";
import { func } from "prop-types";
import { connect } from "react-redux";
import { setUsername } from "../../actions";
import NavButton from "../../components/NavButton";

const ButtonViewContainer = ({
  onViewClick,
}) => (
  <View>
    <NavButton username="petetnt" onViewClick={onViewClick} />
    <NavButton username="valstu" onViewClick={onViewClick} />
    <NavButton username="doggosdoingthings" onViewClick={onViewClick} />
  </View>
);

const mapDispatchToProps = dispatch => ({
  onViewClick: (username) => {
    dispatch(setUsername(username));
  },
});

ButtonViewContainer.propTypes = {
  onViewClick: func.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(ButtonViewContainer);
