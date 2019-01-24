import React from 'react'
import SearchBar from './SearchBar.js'
import youtube from '../apis/youtube.js';


class App extends React.Component {
   onTextSubmit = (text) => {
     youtube.get('./search', {
       params: {
         q: text
       }
     })
   }
  render() {
    return ( 
    <div className='ui container'> 
      <SearchBar onTextSubmit={this.onTextSubmit}/>
    </div>
    )
  }
}

export default App