// DemosContainer.js
import React, { useState, useRef } from 'react';
import Demos from './Demos.jsx';

const DemoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const demosRef = useRef(null);

  const handleVideoChange = (event, videoId) => {
    event.preventDefault();
    setSelectedVideo(videoId);
    demosRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="demos-container">
    <div className="videos-menu">
      <ul>
        <li>
          <a href="#Spearhead_Mobil_App" onClick={(e) => handleVideoChange(e, 'Spearhead_Mobil_App')}>
          Spearhead Mobil App
          </a>
        </li>
        <li>
          <a href="#Spearhead_Admin_Platform" onClick={(e) => handleVideoChange(e, 'Spearhead_Admin_Platform')}>
          Spearhead Admin Platform Part 1
          </a>
        </li>
        <li>
          <a href="#Spearhead_Admin_Platform_2" onClick={(e) => handleVideoChange(e, 'Spearhead_Admin_Platform_2')}>
          Spearhead Admin Platform Part 2
          </a>
        </li>
        <li>
          <a href="#sapiam" onClick={(e) => handleVideoChange(e, 'sapiam')}>
            Sapiam
          </a>
        </li>
        <li>
          <a href="#nightlifeApp" onClick={(e) => handleVideoChange(e, 'nightlifeApp')}>
            Nightlife
          </a>
        </li>
      </ul>
    </div>
    <Demos selectedVideo={selectedVideo} demosRef={demosRef} />
  </div>
);
};



export default DemoPage;
