import React, { useState } from 'react'
import "./Product.css";
import Img1 from "../IMG/t1.JPG";
import Img2 from "../IMG/t2.JPG";
import Img3 from "../IMG/t3.JPG";
import Img4 from "../IMG/t4.JPG";

export default function Product() {
    const[num,setnum]=useState(0);
    function IncNum(){
        setnum(num+1);
    }
  return (
    <div>
         
        <div><div className='main-header'>
            <span className='header-title'>Shopping Cart </span>
             <span className='count'>count items:{num}</span> </div>
             <h1>Our items</h1>
      
    <div className='image-list'>
    <div className='imgset'><img src={Img1} alt="" /><button className='btn' onClick={IncNum}>Add to cart</button></div>

  
       <div className='imgset'><img src={Img2} alt="" /><button className='btn' onClick={IncNum}>Add to cart</button></div>
       <div className='imgset'><img src={Img3} alt="" /><button className='btn' onClick={IncNum}>Add to cart</button></div>
       <div className='imgset'><img src={Img4} alt="" /><button className='btn' onClick={IncNum}>Add to cart</button></div>
    </div>    
    
    </div></div>

  )
}
