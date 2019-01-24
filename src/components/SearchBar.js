import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
    <div className='search-bar ui segment'>
      <form className='ui from'>
        <div className='field'>
          <label>Video Search</label>
          <input type='text'></input>
          </div>
      </form>
    </div>
    );
  }
}

export default SearchBar 