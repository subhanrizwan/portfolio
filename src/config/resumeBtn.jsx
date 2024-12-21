import React from "react";
import './resumeBtn.css'
import pdf from '../assets/images/Subhan Ahmed.pdf';

const Resume=()=>{
    return(
<div className="resBtn">
    <div className="btn" onClick={()=>  window.open(pdf)} >My Resume</div>
</div>
    )
}
export default Resume;
