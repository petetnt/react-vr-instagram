import React, { Component } from "react";
import { View } from "react-vr";
import { string, shape, arrayOf, func } from "prop-types";
import { connect } from "react-redux";
import ImageView from "../../components/ImageView";
import NavButton from "../../components/NavButton";
import {
  loadImages,
  setUsername,
} from "../../actions";

class ImageViewContainer extends Component {
  componentDidMount() {
    const {
      username,
      dispatchLoadImages,
    } = this.props;

    if (username) {
      dispatchLoadImages(username);
    }
  }

  render() {
    const {
      images,
      onViewClick,
    } = this.props;

    if (!images) {
      return null;
    }

    return (
      <View>
        <NavButton
          username={null}
          onViewClick={onViewClick}
          style={{
            transform: [
              { translate: [0, 0.25, -2] },
            ],
          }}
        />
        <ImageView images={images} />
      </View>
    );
  }
}

const mapStateToProps = ({
  username: {
    username,
  },
  imageView: {
    images,
  },
}) => ({
  images,
  username,
});

const mapDispatchToProps = dispatch => ({
  onViewClick: (username) => {
    dispatch(setUsername(username));
  },
  dispatchLoadImages: (username) => {
    dispatch(loadImages(username));
  },
});

ImageViewContainer.propTypes = {
  dispatchLoadImages: func.isRequired,
  onViewClick: func.isRequired,
  username: string,
  images: arrayOf(shape({
    id: string,
    uri: string,
  })),
};

ImageViewContainer.defaultProps = {
  username: null,
  images: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewContainer);
