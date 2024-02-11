import React from 'react';
import ReactPlayer from 'react-player';
import NightlifeApp from './vids/NighlifeApp.mp4';
import sapiam_Demo from './vids/sapiam_Demo.mp4';



const Demos = ({ selectedVideo, demosRef }) => {

    return ( 
            <div className="demos-content" ref={demosRef}>
              <br />
              {selectedVideo === 'Spearhead_Mobil_App' && (
                <div id="Spearhead_Mobil_App" className="player-wrapper">
                 <iframe 
                     title="Spearhead_Mobil_App"
                     width='95%'
                     height='95%'
                    src="https://www.loom.com/embed/edcbe895c8ce499ba8059f71d8095ade?sid=b93dd829-51db-4dd7-996c-0c0575bdaef0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen >
                    </iframe>
                </div>
              )}
              {selectedVideo === 'Spearhead_Admin_Platform' && (
                <div id="Spearhead_Admin_Platform" className="player-wrapper">
                    <iframe title="Spearhead_Admin_Platform"
                    width='95%'
                    height='95%'
                     src="https://www.loom.com/embed/f4daf59699c6421aaf5bc8b255c3c90d?sid=05e82a5b-203a-40e7-a48d-2e34dc5e5a62" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                    </iframe>
                </div>
              )}
                {selectedVideo === 'Spearhead_Admin_Platform_2' && (
                <div id="Spearhead_Admin_Platform_2" className="player-wrapper">
                    <iframe
                    title="Spearhead_Admin_Platform_2"
                    width='95%'
                    height='95%'
                    src="https://www.loom.com/embed/9f7297a697414990ad2f9014cafb6482?sid=02e1d0fd-4f28-4e12-b3dd-75ef3d0656dd" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
              )}
              {selectedVideo === 'sapiam' && (
                <div id="sapiam" className="demos-content">
                  <div className="player-wrapper">
                    <ReactPlayer url={sapiam_Demo} controls playbackRate={1.25} />
                  </div>
                  <button className="demo-visit-button">
                    <a href="https://sapiam-f41e9ce79228.herokuapp.com/">Visit Sapiam</a>
                  </button>
                </div>
              )}
              {selectedVideo === 'nightlifeApp' && (
                <div id="nightlifeApp" className="demos-content">
                  <div className="player-wrapper">
                    <ReactPlayer url={NightlifeApp} controls playbackRate={1.25} />
                  </div>
                </div>
              )}
              <br />
            </div>
          );
        };
        
 
export default Demos;