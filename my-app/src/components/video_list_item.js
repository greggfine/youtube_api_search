import React from 'react';

const VideoListItem = ({video}) => {
  console.log({video})
  return (


    <div className="container thumbnail"><div className="row"> <div className="col-md-12">

      <li>  <img src={video.snippet.thumbnails.default.url} />  </li>

      </div></div></div>



  )
}

export default VideoListItem;
