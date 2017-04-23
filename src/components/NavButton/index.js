import React from "react";
import { func, string, object } from "prop-types";
import { VrButton, Text } from "react-vr";

const NavButton = ({ onViewClick, username, style }) => (
  <VrButton
    style={{
      width: 1,
      height: 1,
      transform: [
        { translate: [0, 0, -2] },
      ],
      ...style,
    }}
    onClick={() => onViewClick(username)}
  >
    <Text>{username ? `Click me for ${username}` : "Go back to menu"}</Text>
  </VrButton>);

NavButton.propTypes = {
  onViewClick: func.isRequired,
  username: string,
  style: object, // eslint-disable-line react/forbid-prop-types
};

NavButton.defaultProps = {
  username: null,
  style: {},
};

export default NavButton;
