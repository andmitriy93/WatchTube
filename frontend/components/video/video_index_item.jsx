import React from 'react';

const VideoIndexItem = props => {
    return (
        <div className="video-wrapper">
            <div className="video-container">
                <video className="vid-player" src={props.video.video_url} width="300" />
                <p className="desc">{props.video.id} {props.video.title}</p>
            </div>
        </div>
    )
}

export default VideoIndexItem;