import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const allVids = props.vids.map(video =>{
    return <VideoListItem video={video} />
  })

  return(
    <ul> {allVids}</ul>
  

  )
}

export default VideoList;
