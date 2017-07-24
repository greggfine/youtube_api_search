import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import './App.css';
const API_KEY = 'AIzaSyBYIo5mQk8lo-OIOO4hoBenbmQ4y49QjPg';




class App extends Component {
  constructor(props){
    super(props);

    this.state={videos: []};

    YTSearch({key:API_KEY, term: 'Mix With the Masters'}, videos =>{
      this.setState({videos});
    })
  }


  render(){
    return (
      <VideoDetail vids={this.state.videos[0]} />
    )
  }
}



export default App;
