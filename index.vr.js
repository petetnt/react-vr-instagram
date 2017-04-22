import React from "react";
import {
  AppRegistry,
  CylindricalPanel,
  View,
  Image,
} from "react-vr";

const density = 4096;

// eslint-disable-next-line
export default class MotleyAmsterdam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: null };
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:9666/api/user/petetnt")
      .then(res => res.json()).then((res) => {
        const images = res.items.map((item) => {
          const {
            id,
            images: {
            standard_resolution: {
              url,
            },
          } } = item;

          return {
            id,
            uri: url,
          };
        });
        that.setState(() => ({
          images,
        }));
      });
  }
  render() {
    if (!this.state.images) {
      return null;
    }
    return (
      <View>
        {this.state.images.map(({ id, uri }, index) => (<CylindricalPanel
          key={id}
          layer={{
            width: 512,
            height: 512,
            density,
            radius: 3,
          }}
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
    );
  }
}

AppRegistry.registerComponent("MotleyAmsterdam", () => MotleyAmsterdam);
