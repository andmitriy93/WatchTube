import React from 'react';
import video_index_container from './video_index_container';
import VideoIndexItem from './video_index_item';


class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if (!this.props.videos) { return null }
        let videos = this.props.videos.map(video => <VideoIndexItem video={video} key={video.id} />)
        return (
            <div className="vid-container">
                <div className="vid-item">{videos}</div>
            </div>
        )
    }
}

export default VideoIndex;