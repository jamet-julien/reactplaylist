import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const defaultStyle = {
  width   : "40%",
  color   : "#FFF"
};

class Title extends Component{
  render(){
    return (
      <h1>Title</h1>
    )
  }
}

class Aggregation extends Component{
  render(){
    let style = {
      ...defaultStyle,
      margin: "0 20px",
      display: "inline-block",};
    return (
      <span style={style}>Number of elements (prod)</span>
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
       <input type="text"/>
       <button>Filter</button>
     </div>
    )
  }
}


class Playlist extends Component{
  render (){
    let style = {
      ...defaultStyle,
      display: "inline-block",
      width : "20%"
    }
    return (
      <div style={style}>
        <img/>
        <p>Playlist name</p>
        <ul>
          <li>premier</li>
          <li>second</li>
          <li>troisième</li>
          <li>quatriéme</li>
        </ul>
      </div>
    )
  }
}


class App extends Component {
  render() {
    
    let name  = 'julien';
    let style = {
      color    : 'red',
      fontSize : '50px'
    };

    return (
      <div className="App">
        <Title/>
        <Aggregation/>
        <Aggregation/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
