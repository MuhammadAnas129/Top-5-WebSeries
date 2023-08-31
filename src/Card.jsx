import React from "react";


export default function Card(props){
<>
    <div className="Cards">
        <div className="Card">
            <img className="card_img" src={props.img} alt='myPic'/>
            <div className="Card_Info">
                <span className="Crad_Catagori">  {props.type}
                </span>
                <h3 className="card_tital"> </h3>
                <a href="" target="_blank"> </a>
                <button>Watch Now</button>
            </div>
        </div>
    </div>    
</>
}