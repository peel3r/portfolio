import React, {PropTypes} from 'react'
import VideoListItem from './videoListItem'
const VideoList = (props) => {
  VideoList.propTypes = {
    onVideoSelect: PropTypes.func.isRequired,
    videos: PropTypes.array.isRequired
  }

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })
  return (
    <div className="col-md-4">

      {videoItems}

      </div>
  )
}

export default VideoList
