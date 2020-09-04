import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
    
        <div className="header--title">
            <p className="header--title__name">Hay equipo</p>
        
            <p className="header--title__desc">La app para que armes el team</p>
        </div>

    </header>
  );
}

export default Header;

/* <header>
        <div class="header--title">
            <p class="header--title__name">Hay equipo</p>
        
            <p class="header--title__desc">La app para que armes el team</p>
        </div>
        <nav className="header--nav">
            <ul className="header--menu">
                <li>
                    <a className="headerlinkfont" href="https://mail.google.com/">Gmail</a>
                </li>
                <li>
                    <a className="headerlinkfont" href="">Imágenes</a>
                </li>
                <li className="menu--icon">
                    <a href=""></a>
                </li>
                <li>
                    <a href="">
                        <img class="menu--profileImg" src="https://lh3.googleusercontent.com/ogw/ADGmqu9kb4JLtIYaIVVRbvNm7vTrTGWNeHCgi8tU4soN=s32-c-mo" alt="Profile Image" />    
                    </a>
                </li>
            </ul>
        </nav>
        
    </header> */
    // <main>
    //     <div class="main--login">
    //         <ul class="login--menu">
    //             <li class="login--menu__input">
    //                 <input type="text" placeholder="Usuario o Correo Electrónico">
    //             </li>
    //             <li class="login--menu__input">
    //                 <input type="text" placeholder="Contraseña">
    //             </li>
    //             <li class="login--menu__button">
    //                 <button>Ingresar</button>
    //             </li>
    //             <li class="login--menu__href">
    //                 <a href="./registration/regIndex.html">Regístrate</a>
    //             </li>
    //         </ul>
    //     </div>
    // </main>