import * as APIUtil from "../utils/video_util";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos,
});

const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video,
});


export const fetchVideos = () => (dispatch) => {
  return APIUtil.fetchVideos().then((videos) =>
    dispatch(receiveVideos(videos))
  );
};

export const fetchVideo = (videoId) => (dispatch) => {
  return APIUtil.fetchVideo(videoId).then((video) =>
    dispatch(receiveVideo(video))
  );
};

export const searchVideos = (videoTitle) => (dispatch) => {
  return APIUtil.searchVideos(videoTitle).then((searchedVideos) =>
    dispatch(receiveVideos(searchedVideos))
  );
};
