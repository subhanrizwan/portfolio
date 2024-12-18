import React from "react";
import './socialicons.css'

import ReactDOM from 'react-dom';
import { SocialIcon} from 'react-social-icons';

const SocIcons=()=>{
    return(
    <>
<div className="Social">
    
    <i class="fa-brands fa-linkedin" onClick={()=> window.open('https://www.linkedin.com/in/subhanahmed1/')}></i>

</div>
<div className="Social1">
<i class="fa-brands fa-github" onClick={()=> window.open('https://github.com/subhanrizwan?tab=repositories')} ></i>
</div>

<div className="Social3">
<i class="fa-brands fa-whatsapp" onClick={()=> 
window.open('https://wa.me/03343760625') } ></i>
</div>
</>
    )
}
export default SocIcons;