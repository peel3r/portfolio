import React from 'react'
import sty from './style.scss'

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <div className={sty.container} onClick={ () => onVideoSelect(video) } >
      <div>
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  )
}
export default VideoListItem
