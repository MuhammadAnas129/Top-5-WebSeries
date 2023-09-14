import React from "react";

export default function Card(props) {
  return (
    <>
      {/* <div className="Cards"> */}
        <div className="Card">
          <img src={props.imgsrc} className="card_img" alt="myPic" />
          <div className="Card_Info">
            <span className="Crad_mType">{props.type}</span>
            <h3 className="card_mName">{props.name}</h3>
            <span className="Crad_mStudio">{props.studio}</span><br/>
            <span className="Crad_mDate">{props.dateAired}</span><br/>
            <span className="Crad_mStatus">{props.status}</span><br/>
            <a href={props.scr} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
