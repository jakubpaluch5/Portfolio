import React, { Component } from 'react';
import {Header, Content, Navigation, Layout} from 'react-mdl'
import "./App.css";
import { NavLink } from 'react-router-dom';
import Main from './components/main'
class Demo extends Component {
    
    state = {
        title:"Portfolio",
        name:"Jakub",
        surname:"Paluch",
        description: "Developer with passion",
        telephone: "515-277-100"
      }
  render() {
    
      return (
        <div className="desktop">
        <div className="demo-big-content">
        <Layout className="layout">
            <Header className="header" style={{background: "black", fontFamily: "Rubik"}}  title={<NavLink style={{textDecoration: "none"}} to="/"><h1 style={{fontFamily: 'Rouge Script', textDecoration: 'none', color: "white"}}>{this.state.title}</h1></NavLink> } scroll>
                <Navigation>
                    
                    <NavLink className="navigation-link education" to="/education" activeClassName="active"><span>Education</span></NavLink>
                    <NavLink className="navigation-link" to="/projects" activeClassName="active"><span>Projects</span></NavLink>
                    <NavLink className="navigation-link" to="/about" activeClassName="active"><span>About</span></NavLink>
                    <NavLink className="navigation-link" to="/contact" activeClassName="active"><span>Contact</span></NavLink>
                    <NavLink className="navigation-link" to="/skills" activeClassName="active"><span>Skills</span></NavLink>
                    
                </Navigation>
            </Header>
            <div className="mobile-logo">
                <span>Portfolio</span>
            </div>
            <div className="mobile-header"  scroll>
                <Navigation>
                    
                <NavLink className="navigation-link education educationClass" to="/education" activeClassName="active"><span>Education</span></NavLink>
                     <NavLink className="navigation-link" to="/projects" activeClassName="active"><span>Projects</span></NavLink>
                    <NavLink className="navigation-link" to="/about" activeClassName="active"><span>About</span></NavLink>
                    <NavLink className="navigation-link" to="/contact" activeClassName="active"><span>Contact</span></NavLink>
                    <NavLink className="navigation-link" to="/skills" activeClassName="active"><span>Skills</span></NavLink>
                    
                </Navigation>
            </div>
            <Content>
                <Main />
                
            </Content>
           
            
        </Layout>
    </div>
    </div>
    
      );
  }
}
export default Demo;

