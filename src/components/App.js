import React from 'react'
import SearchBar from './SearchBar.js'



class App extends React.Component {
   onTextSubmit = (text) => {
     console.log(text);
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