import React from 'react'
import SearchBar from './SearchBar.js'
import youtube from '../apis/youtube.js';
import VideoList from './videolist.js'

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
    console.log('this is veido object', video)
   }

  render() {
    return ( 
    <div className='ui container'> 
      <SearchBar onTextSubmit={this.onTextSubmit}/>
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
    </div>
    )
  }
}

export default App