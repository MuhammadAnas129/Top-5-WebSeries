import React,{useState} from "react";
import html2canvas from "html2canvas"
import jsPDF from 'jspdf'
 
export default function Card(props) {

  const [loader, setLoader] = useState(false);
   
  const downloadPDF = () => {
  const capture = document.querySelector('.Card');
  setLoader(true);
  html2canvas(capture).then((canvas)=>{
  const imgData = canvas.toDataURL("img/png");
  const doc = new jsPDF('p', 'mm',"a4");
  const componentWidth = doc.internal.pageSize.getWidth();
  const componentHeight = doc.internal.pageSize.getHeight(); 
  doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
  doc.save('receipt.pdf');
  })
}

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
            {/* //pdf export */}
            <div className="action">
            <div className="button">
            <button className="pdf"
             onClick={downloadPDF}
             disabled={!(loader===false)}
             >
            {loader?
            (<span>Donloading....</span>):
            (<span>Download</span>)}
            </button>
            </div>
            </div> 

          </div>
        </div>
      {/* </div> */}
    </>
  );
}
