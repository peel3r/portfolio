import _ from 'lodash'
import React, { Component} from 'react'
import SearchBar from '../../components/Youtube/searchBar'
import YTSearch from 'youtube-api-search'
import VideoList from '../../components/Youtube/video_list'
import VideoDetail from '../../components/Youtube/videoDetail'
import 'bootstrap/dist/css/bootstrap.css'

const API_KEY = 'AIzaSyBX2Vnu_4J-BKZklZ6d3Bn1T9x7p5JC8es'

export default class Youtube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('sreact redux')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, maxResults: 5, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div className="container">
        <div className="center-block">
        <h1>Youtube Search</h1>
        <SearchBar onSearchTermChange={videoSearch}/>
          </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    )
  }
}
