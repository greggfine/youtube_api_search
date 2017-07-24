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

      <h4 style={{textAlign: 'center'}}><strong>{vids.snippet.title}</strong></h4>
      <iframe src={url} allowFullScreen className="vidDetail"></iframe>
    </div>

  )
}



export default VideoDetail;
