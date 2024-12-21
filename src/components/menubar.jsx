import React from 'react'
import './menubar.css'


const Menubar=()=>{
    return(

        <div className="main_nav show-box">
        <ul className='ul_mbar'>
        <li>
          <a  href="#Home">Home</a>
        </li>
        <li>
          <a  href="#Skills">Skills</a>
        </li>
        <li>
          <a  href="#Education">Education</a>
        </li>
        <li>
          <a   href="#Projects">Projects</a>
        </li>
        <li>
          <a  href="#Contact">Contact</a>
        </li>
            
        </ul>
       </div>
   
    )
}
export default Menubar;