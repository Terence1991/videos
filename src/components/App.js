import React from 'react'
import SearchBar from './SearchBar.js'
import youtube from '../apis/youtube.js';
import VideoList from './videolist.js'

class App extends React.Component {
    state = {videos: [] }


   onTextSubmit = async text => {
      const response = await youtube.get('./search', {
       params: {
         q: text
       }
     });
     this.setState({videos: response.data.items})
   };

  render() {
    return ( 
    <div className='ui container'> 
      <SearchBar onTextSubmit={this.onTextSubmit}/>
      <VideoList videos={this.state.videos}/>
    </div>
    )
  }
}

export default App