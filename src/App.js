import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


const defaultStyle = {
  width   : "40%",
  color   : "#FFF"
};

const fakeServerData = {
  "user": {
    "name": "Ophelia",
    "last": "Garner"
  },
  "playlists": [
    {
      "name": "Knight labore",
      "songs": [
        {
          "song": "qui labore laboris",
          "duration": 4782
        },
        {
          "song": "veniam eiusmod exercitation",
          "duration": 3073
        },
        {
          "song": "quis consectetur amet",
          "duration": 2353
        }
      ]
    },
    {
      "name": "Peterson dolore",
      "songs": [
        {
          "song": "consectetur culpa aliqua",
          "duration": 1809
        },
        {
          "song": "ipsum occaecat dolore",
          "duration": 3767
        },
        {
          "song": "excepteur sint aliqua",
          "duration": 4981
        }
      ]
    },
    {
      "name": "House voluptate",
      "songs": [
        {
          "song": "mollit aliquip eiusmod",
          "duration": 3617
        },
        {
          "song": "aliquip voluptate sit",
          "duration": 2506
        },
        {
          "song": "ut dolor amet",
          "duration": 1932
        }
      ]
    },
    {
      "name": "Snider dolor",
      "songs": [
        {
          "song": "ad irure et",
          "duration": 1475
        },
        {
          "song": "veniam Lorem qui",
          "duration": 1172
        },
        {
          "song": "culpa mollit dolore",
          "duration": 1988
        }
      ]
    }
  ]
};

class Title extends Component{
  render(){
    return (
      <h1>{this.props.name}</h1>
    )
  }
}

class PlaylistCounter extends Component{
  render(){
    let style = {
      ...defaultStyle,
      margin: "0 20px",
      display: "inline-block",};
    return (
      <span style={style}>{(this.props.playlists)? this.props.playlists.length : 0 } playlists</span>
    )
  }
}

class HourCounter extends Component {
  render() {
    let style = {
      ...defaultStyle,
      margin: "0 20px",
      display: "inline-block",
    };

    let totalDuration = this.props.playlists
            .map(({songs}) => songs.reduce( ( total, { duration }) => total + duration, 0) )
            .reduce( (total, duration) => total + duration, 0);

    return (
      <span style={style}>{totalDuration} hours</span>
    )
  }
}

class Filter extends Component{
  render(){
    let style = {
      defaultStyle
    }
    return (
     <div style={style}>
        <input type="text" onKeyUp={({ target }) => this.props.onFilter(target.value)}/>
     </div>
    )
  }
}


class Playlist extends Component{

  render (){
    let style = {
      ...defaultStyle,
      verticalAlign : "top",
      display: "inline-block",
      width : "20%"
    };
    return (
      <div style={style}>
        <img/>
        <p>{this.props.name}</p>
        <ul>
          {this.props.songs && this.props.songs.map( ({song}, index) => <li key={index}>{song}</li>)}
        </ul>
      </div>
    )
  }
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      serverData : {},
      filterSlug : ''
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ serverData: fakeServerData });
    }, 1000)
/*
    setTimeout(() => {
      this.setState({ filterSlug: 'ore' });
    }, 2000)
*/
  }


  render() {
  
    let style = {
      color    : 'red',
      fontSize : '50px'
    };

    let playlistRender = this.state.serverData.user ? this.state.serverData.playlists.filter(({ name }) => name.toLowerCase().includes(this.state.filterSlug.toLowerCase())) : [];

    if (this.state.serverData.user ){
      return (
        <div className="App">
          <Title name={this.state.serverData.user.name}/>
          <PlaylistCounter playlists={playlistRender}/>
          <HourCounter playlists={playlistRender}/>
          <Filter onFilter={el => this.setState({ filterSlug: el })}/>
          {playlistRender.map( ({name,songs},index) => <Playlist key={index} name={name} songs={songs}/>)}
        </div>
      );
    }else{
     return( <div style={defaultStyle}>Loading ...</div>);
    }
  }
}

export default App;
