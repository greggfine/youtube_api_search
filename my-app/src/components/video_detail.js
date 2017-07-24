import React from 'react';



const VideoDetail = ({vids}) =>{

  if(!vids){
    return<h1>loading...</h1>
  }
console.log({vids})

const videoId = vids.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;


  return(
    <div>

      <h4>{vids.snippet.title}</h4>
      <iframe src={url} allowFullScreen></iframe>
    </div>

  )
}



export default VideoDetail;
