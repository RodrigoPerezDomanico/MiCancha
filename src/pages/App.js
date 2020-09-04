import React from 'react';
import './styles/App.css';
import Header from '../components/header'
import Login from '../components/Login'


class App extends React.Component{
  render(){
    return <div className = "global Container">
      <Header/>
      <Login/>
    </div>
  }
}


export default App;
