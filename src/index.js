import React, { useState } from 'react'
import reactDom from 'react-dom'
import Time from './Time'
import './index.css'



let curDate = new Date();
curDate = curDate.getHours();
let greet = '';
let cssStyle = {};





if(curDate>=1 && curDate<11){
  greet='Good Morning'
  cssStyle.color='green';
}else if(curDate>=12 && curDate<19){
  greet= 'Good Afternoon'
  cssStyle.color='yellow';
  
}else{
  greet='Good Night'
  cssStyle.color='black';
  
}
reactDom.render(
  
  <div className='hey'>
  <Time/>
  <h1>Hello Sir, <span style={cssStyle}>{greet}</span></h1>
  </div>
  ,
  document.getElementById('root')
)
