import React from 'react'

class SearchBar extends React.Component {
    
  state = {text: ''}

  onInputChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
    <div className='search-bar ui segment'>
      <form className='ui from'>
        <div className='field'>
          <label>Video Search</label>
          <input 
          type='text' 
          value={this.state.text}
          onChange={this.onInputChange}
          />
          </div>
      </form>
    </div>
    );
  }
}

export default SearchBar 