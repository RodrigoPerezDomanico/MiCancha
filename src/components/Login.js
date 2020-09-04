import React from 'react';
import './styles/body.css';
//import { render } from '@testing-library/react';
// import sendSignal from '../functions/utils'
var clicks=0
class Login extends React.Component {
    handleClick() {
        clicks+=1
        if(clicks<2){
            console.log(`Se ha realizado ${clicks} Click`)
        }else{
            console.log(`Se han realizado ${clicks} Clicks`)
        }
    }
    handleChange= e => {
        console.log({value:e.target.value})
    }
   
    render (){
    return <div className="mainDiv">
            <div className="main--login">
                <ul className="login--menu">
                    <li className="login--menu__input">
                        <input type="text" placeholder="Usuario o Correo Electrónico"onChange={this.handleChange}/>
                    </li>
                    <li className="login--menu__input">
                        <input type="password" placeholder="Contraseña" />
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