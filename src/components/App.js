import React from 'react'
import SearchBar from './SearchBar.js'
import youtube from '../apis/youtube.js';
import VideoList from './videolist.js'
import VideoDetail from './VideoDetail.js'

class App extends React.Component {
    state = {videos: [], selectedVideos: null }


   onTextSubmit = async text => {
      const response = await youtube.get('./search', {
       params: {
         q: text
       }
     });
     this.setState({videos: response.data.items})
   };

   onVideoSelect = (video) => {
    this.setState({selectedVideos: video})
  }

  render() {
    return ( 
    <div className='ui container'> 
      <SearchBar onTextSubmit={this.onTextSubmit}/>
      <div className='ui grid'>
      <div className='ui row'>
      <div className="eleven wide column">
      <VideoDetail video={this.state.selectedVideos}/>
      </div>
      <div className="five wide column">
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
      </div>
      </div>
    </div>
    );
  }
}

export default App;