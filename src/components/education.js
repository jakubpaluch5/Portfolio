import React, { Component } from 'react';
import './education.css';
import { Tab, Tabs } from "react-mdl";
import sp18 from "./sp18.png";
import gim11 from "./gim11.png";
import ckziu from "./ckziu.png";
import ask from "./ask.png";
class education extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        if(this.state.activeTab === 0){
           
            return(
                <div className="edu-card">
                    
                        <div className="edu-photo animate__animated animate__fadeInLeftBig" style={{backgroundImage: `url(${sp18})`}}></div>
                        <div className="edu-card-arrow  animate__animated animate__fadeInDown"><i class="fas fa-angle-right"></i></div>
                        <div className="edu-card-title  animate__animated animate__fadeInRightBig"><h1>Primary school</h1><p>At this point of my life, i didn't know what i wanted to do, but i had been interested in computers since i was a child.</p></div>
                        </div>
            )
        }else if(this.state.activeTab === 1)
        {
            
            return(
                <div className="edu-card">
                    
                <div className="edu-photo animate__animated animate__fadeInLeftBig" style={{backgroundImage: `url(${gim11})`}}></div>
                <div className="edu-card-arrow  animate__animated animate__fadeInDown"><i class="fas fa-angle-right"></i></div>
                <div className="edu-card-title  animate__animated animate__fadeInRightBig"><h1>Middle school</h1><p>In this school I decided to go to technical secondary school to IT class. However, I didn't know in which direction of IT wanted to go.</p></div>
                </div>
            )
        }
        else if(this.state.activeTab === 2)
        {
            return(
                <div className="edu-card">
                    
                <div className="edu-photo animate__animated animate__fadeInLeftBig" style={{backgroundImage: `url(${ckziu})`}}></div>
                <div className="edu-card-arrow  animate__animated animate__fadeInDown"><i class="fas fa-angle-right"></i></div>
                <div className="edu-card-title  animate__animated animate__fadeInRightBig"><h1>Technical secondary school</h1><p>In this school i discovered coding. From the first year at this school I was interested in web programming. It has become my hobby until today.</p></div>
        </div>
            )
        }
        else if(this.state.activeTab === 3)
        {
            return(
                <div className="edu-card">
                    
                <div className="edu-photo animate__animated animate__fadeInLeftBig" style={{backgroundImage: `url(${ask})`}}></div>
                <div className="edu-card-arrow  animate__animated animate__fadeInDown"><i class="fas fa-angle-right"></i></div>
                <div className="edu-card-title  animate__animated animate__fadeInRightBig"><h1>Not selected </h1><p>I have no plans to finish my education.</p></div>
        </div>
            )
        }
        
    }


    render() {
        return (
            <div className="edu-container">
                <div className="edu-header">
                    <div className="edu-header-container">
                        <div className="edu-title animate__animated animate__fadeInLeft">
                            <h1>MY EDUCATION</h1>
                        </div>
                        <div className="tab-cont">
                            <div className="demo-tabs">
                                <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                                    <Tab className="tab animate__animated animate__fadeInDown"><div>2007</div></Tab>
                                    <Tab className="tab animate__animated animate__fadeInDown"><div>2013</div></Tab>
                                    <Tab className="tab animate__animated animate__fadeInDown"><div>2016</div></Tab>
                                    <Tab className="tab animate__animated animate__fadeInDown"><div>2021</div></Tab>
                                </Tabs>
                                
                            </div>   
                        </div>   
                    </div>
                </div>
                <div className="edu-section-container">
                              
                    {this.toggleCategories()} 
                 </div>    
                    </div>
                 
        )
    }
}
export default education;