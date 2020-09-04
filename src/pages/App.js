import React from 'react';
import './App.css';
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

// function App() {
//   return (
//     <div className="global Container">
        

//     </div>
    
    
    
//   );
// }

export default App;
