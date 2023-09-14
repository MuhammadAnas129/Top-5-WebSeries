import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import sData from './sData';
import Card from './Card';

function App() {
  return (
    <>
      <h1>Top 5 Animated Series</h1>
      
      <div className='Cards'>
      {sData.map((val) => (
        <Card
          key={val.id} // Replace with a unique identifier if available
          imgsrc={val.imgsrc}
          type={val.type}
          name={val.name}
          studio={val.studios}
          dateAired={val.dateAired}
          status={val.status}
          scr={val.scr}
        />
      ))}
      </div>
    </>
  );
}

const root = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
