import React from 'react';
import './styles/Header.css';

class Header extends React.Component{
    render(){
        return <header className="Header">
            
    
            <div className="header--title">
                <p className="header--title__name">Hay equipo</p>
            
                <p className="header--title__desc">La app para que armes el team</p>
            </div>

        </header>  
    }
}
export default Header
