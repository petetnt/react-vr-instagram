import React from "react";
import { func, string, object } from "prop-types";
import { CylindricalPanel, VrButton, Text } from "react-vr";

const letters = Object.keys("x".repeat(128)).slice(32, 127).map(x => String.fromCharCode(x));

const layer = {
  width: 512,
  height: 512,
  radius: 3,
  density: 4096,
};

const Letter = ({ onLetterClick, letter }) => (
  <VrButton
    style={{
      width: 120,
      transform: [
        { translate: [0, 0, -2] },
      ],
      borderStyle: "solid",
      borderColor: "#fff",
      borderWidth: 0.005,
    }}
    onClick={() => onLetterClick(letter)}
  >
    <Text
      style={{
        textAlign: "center",
      }}
    >{letter}</Text>
  </VrButton>);

const Keyboard = ({ onLetterClick, style }) => (
  <CylindricalPanel
    layer={layer}
    style={style}
  >
    {letters
    .map((letter, index) => (
      <Letter
        // eslint-disable-next-line
        key={`${letter}_key_${index}`}
        letter={letter}
        onLetterClick={onLetterClick}
      />
    ))}
  </CylindricalPanel>
);

Letter.propTypes = {
  onLetterClick: func.isRequired,
  letter: string.isRequired,
};

Letter.defaultProps = {
  style: {},
};

Keyboard.propTypes = {
  onLetterClick: func,
  style: object, // eslint-disable-line 
};

Keyboard.defaultProps = {
  onLetterClick: console.log, // eslint-disable-line
  style: {},
};

export default Keyboard;

