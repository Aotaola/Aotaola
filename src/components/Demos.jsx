import React from 'react';
import ReactPlayer from 'react-player';
import NightlifeApp from './vids/NighlifeApp.mp4';



const Demos = () => {

    return ( 
        <div className="demos-container">
            <h1>Project Demos</h1>
            <div className="demos-content">
                <div className="player-wrapper">
                    <ReactPlayer url = {NightlifeApp}
                        controls   
                        playbackRate={1.25}                 
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Demos;