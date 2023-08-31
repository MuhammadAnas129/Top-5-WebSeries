import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sData from './sData'
import Card from './Card';


function ncard(val){

}

ReactDOM.render(
  <>
  <h1>Top 5 Animated Series</h1>

  {sData.map((val)=>{
    return(
      <Card imgsrc={val.img}
        name={val.name}
        type={val.type}
        Studio={val.Studio}
        date={val.date_aired}
        Status={val.Status}
      />

          )
      })}
  </>,
  document.getElementById("root")
)
