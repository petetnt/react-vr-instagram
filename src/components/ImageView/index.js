import React from "react";
import { string, shape, arrayOf } from "prop-types";

import {
  CylindricalPanel,
  View,
  Image,
} from "react-vr";

const density = 4096;

const layer = {
  width: 512,
  height: 512,
  density,
  radius: 3,
};

const ImageView = (({ images }) => (
  <View>
    {images.map(({ id, uri }, index) => (<CylindricalPanel
      key={id}
      layer={layer}
      style={{
        transform: [{ rotateY: `${index * 45}deg` }],
      }}
    >
      <Image
        source={{ uri }}
        style={{
          width: 512,
          height: 512,
        }}
      />
    </CylindricalPanel>))}
  </View>
));

ImageView.propTypes = {
  images: arrayOf(shape({
    id: string,
    uri: string,
  })).isRequired,
};

export default ImageView;
