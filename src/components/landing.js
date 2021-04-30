

import React, { Component } from 'react';
import logo from './portfolio-me.png'
import logosmall from './portfolio-me-small.png'
import logomobile from './portfolio-mobile.png'
import js from './js.png'
import jq from './jq.png'
import rct from './rct.png'
import php from './php.png'
import wp from './wp.png'
import bootstrap from './bootstrap.png'
import html from './html.png'
import css from './css.png'

class landing extends Component {
    state = {  
        name:"Jakub",
        surname:"Paluch",
        description: "Developer with passion",
        telephone: "515-277-100"
      }
    render() {
      
        return (
            <div>    
            <img className="portfolio-img animate__animated animate__fadeInLeft" src={logo} alt="Logo" />
            <img className="portfolio-img-small animate__animated animate__fadeInLeft" src={logosmall} alt="Logo" />
            <img className="portfolio-mobile animate__animated animate__fadeInLeft" src={logomobile} alt="Logo" />
            <div className="front-name animate__animated animate__fadeInDown">
                <h1>{this.state.name}</h1>
                <h1>{this.state.surname}</h1>
                <p>Developer w<span class="bold">IT</span>h passion</p>
            </div>
            <div className="languages animate__animated animate__fadeInRight">
                <img className="lang-img" src={html} alt="html" />
                <img className="lang-img" src={css} alt="css" />
                <img className="lang-img" src={js} alt="js" />
                <img className="lang-img" src={bootstrap} alt="bootstrap" />
                <img className="lang-img" src={wp} alt="wp" />
                <img className="lang-img" src={rct} alt="react" />
                <img className="lang-img" src={jq} alt="jquery" />
                <img className="lang-img" src={php} alt="php" />
            </div>
            <div className="tel-number animate__animated animate__fadeInRight">
                <span><i class="fas fa-phone-alt"></i>{this.state.telephone}</span>
            </div>
            </div>
        )
    }
}
export default landing;

