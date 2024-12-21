import React from 'react';
import './Home.css'
import SocIcons from './socialicons';


const Home = ({Home_Contact,Home_h4,Home_Intro,Home_Social,Foot_heading,HomeGif,
    HomeResume,Foot_Intro,Foot_minHead,FootSecLast,FootImg}) => {

    return (
        
        <div id='Home' className="home" >
            <div className="homeChild1" id="foot-child1">
                <div className="wel-port">
                    <h4> {Home_Contact}
                    {<div className='FootHeading' >{Foot_heading}</div>}
                    </h4>
                </div>
                <h4 className="sec-div">
                    {Foot_minHead}
                    {Home_h4}
                </h4>
                <p className="my-intro">
                    {Home_Intro}
                    {<div className='FootIntro' >{Foot_Intro}
                    </div>}
                </p>
                <p className="seclastfoot">
                    {FootSecLast}
                    {Home_Social}
                </p>
                <div className="my-Soc-Med">
                <SocIcons />
                </div>
                <div className="my-resume">
                {/* <Resume /> */}
               {HomeResume}

                
                </div> 
            </div>
            <div className="homeChild2" id="foot-child2">
                {HomeGif}
                {FootImg}
            </div>

        </div>
    )
}
export default Home;

// animated avatar hi