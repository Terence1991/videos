import React from 'react'


const VideoDetail = ({video}) => {

  if(!video) {
return <div>Loading!!!!</div>
  }

  const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`

 return ( 
   <div>
     <div className='ui-embed'>
     <iframe title="player" src={vidSrc} />
     </div>
  <div className= "ui segment">
     <h4 className="header">
     {video.snippet.title}
     </h4>
     <p>{video.snippet.description}</p>
  </div>
  </div>
 )
}

export default VideoDetail