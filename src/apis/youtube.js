import axios from 'axios'


const KEY = 'AIzaSyCaAIKyfp5gp7gKq2tyaxelkfVILgpTCmQ'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY

  }
})
