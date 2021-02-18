import * as APIUtil from '../utils/video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos,
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});



export default fetchVideos = () => dispatch => {
    return APIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
};

export default fetchVideo = videoId => dispatch => {
    return APIUtil.fetchVideo(videoId)
        .then(video => dispatch(fetchVideo(video)))
}