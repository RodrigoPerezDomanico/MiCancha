import React from 'react';
import './styles/Login.css';

var clicks=0
class Login extends React.Component {
    state ={}
    handleClick() {
        clicks+=1
        if(clicks<2){
            console.log(`Se ha realizado ${clicks} Click`)
        }else{
            console.log(`Se han realizado ${clicks} Clicks`)
        }
    }
    handleChange= e => {
        //console.log({value:e.target.value})
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   
    render (){
    return <div className="mainDiv">
            <div className="main--login">
                
                <ul className="login--menu">
                    <li className="login--menu__input">
                        <input name="UserName" type="text" placeholder="Usuario o Correo Electrónico"onChange={this.handleChange} value={this.state.UserName}/>
                    </li>
                    <li className="login--menu__input">
                        <input name="UserPass" type="password" placeholder="Contraseña" onChange={this.handleChange} value={this.state.UserPass}/>
                    </li>
                    <li className="login--menu__button">
                        <button onClick={this.handleClick}

                        >Ingresar</button>
                    </li>
                    <li className="login--menu__href">
                        <a href="./">Regístrate</a>
                    </li>
                </ul>
            </div>
        </div>
    }
  
}

export default Login