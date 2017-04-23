export const LOAD_IMAGES_START = "LOAD_IMAGES_START";
export const LOAD_IMAGES_SUCCESS = "LOAD_IMAGES_SUCCESS";
export const LOAD_IMAGES_ERROR = "LOAD_IMAGES_ERROR";

const loadImagesStart = username => ({
  type: LOAD_IMAGES_START,
  username,
});

const loadImagesSuccess = images => ({
  type: LOAD_IMAGES_SUCCESS,
  images,
});

const loadImagesError = error => ({
  type: LOAD_IMAGES_ERROR,
  error,
});

export const loadImages = username => (dispatch) => {
  dispatch(loadImagesStart(username));

  fetch(`http://localhost:9666/api/user/${username}`)
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

      // Currently we can only show 8 images...
      dispatch(loadImagesSuccess(images.slice(0, 8)));
    }).catch((err) => {
      console.error(err); // eslint-disable-line
      dispatch(loadImagesError(err));
    });
};
