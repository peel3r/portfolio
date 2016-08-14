import React from 'react'
import VideoListItem from './videoListItem'
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      key={video.etag}
      video={video}
    />
  })
  return (
    <div className="col-md-4 list-group">

      {videoItems}

      </div>
  )
}

export default VideoList
