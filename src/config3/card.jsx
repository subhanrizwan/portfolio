import React from 'react';
import { Card } from 'antd';
import './card.css'

const { Meta } = Card;

const ProjCard = ({quizlogo,todologo,weatherlogo,turologo,title,title2,title1,
btn1,btn2,btn3}) => {
return(

  <Card
  className='mainCard'
    hoverable
    style={{
    }}
    cover={
      <img className='logos' alt="" src={quizlogo || todologo || turologo || turologo} />} 
      >
      <div className="desc">
      {btn1 || btn2 || btn3}
      {/* <h2>{title}{title1}{title2}</h2> */}
    {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
    </div>
    
    <div className="livedemo">
      {/* {btn1 || btn2 || btn3} */}
{/* <button>live demo</button> */}
    </div>
  </Card>
)
}


export default ProjCard;