import React from 'react';
import video_index_container from './video_index_container';
import VideoIndexItem from './video_index_item';


class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        let videos = this.props.videos.map(video => <VideoIndexItem video={video} key={video.id} />)
        return (
            <div className="vid-container">
                <div className="vid-item">{videos}</div>
            </div>
        )
    }
}

// export default VideoIndex;

// class VideoIndex extends React.Component {
//     componentDidMount() {
//         this.props.fetchVideos();
//     }

//     render() {
//         const { videos } = this.props;
//         debugger
//         return (
//             <div className="video-wrapper">
//                 {videos.map((video) => {
//                      <div className="video-container">
//                            <video
//                                 className="video-player"
//                                 src={video.video_url}
//                                 width="300"
//                             />
//                      </div>
//                 })}

//             </div>
//         )
//     }
// }

export default VideoIndex;