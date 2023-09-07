import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sData from './sData';
import Card from './Card';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

function App() {
  return (
    <>
      <h1>Top 5 Animated Series</h1>
      {sData.map((val) => (
        <Card
          key={val.id} // Replace with a unique identifier if available
          imgsrc={val.img}
          type={val.type}
          name={val.name}
          studio={val.studios}
          dateAired={val.dateAired}
          status={val.status}
          scr={val.scr}
        />
      ))}
    </>
  );
}

reactRoot.render(<App />);
