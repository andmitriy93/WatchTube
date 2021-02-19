import React from 'react';

const VideoIndexItem = props => {
    return (
        <div className="vid">
            <video className="vid-player" controls src={props.video.video_url} width="350" />
            <p className="desc">{props.video.id} {props.video.title}</p>
        </div>
    )
}

export default VideoIndexItem;