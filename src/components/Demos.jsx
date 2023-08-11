import React from 'react';
import ReactPlayer from 'react-player';
import NightlifeApp from './vids/NighlifeApp.mp4';
import sapiam_Demo from './vids/sapiam_Demo.mp4';



const Demos = () => {

    return ( 
        <>
        <div className="demos-container">
            <br/>
            <h1>Project Demos</h1>
            <div className="demos-content">
                <div className="player-wrapper">
                    <ReactPlayer url = {sapiam_Demo}
                        controls   
                        playbackRate={1.25}/>
                </div>
                    <button className="demo-visit-button">
                        <a href = "https://sapiam-f41e9ce79228.herokuapp.com/" > Visit Sapiam </a>
                    </button>
                <br/>
                <div className="player-wrapper">
                    <ReactPlayer url = {NightlifeApp}
                        controls   
                        playbackRate={1.25}/>
                </div>
            </div>
            <br/>
        </div>
        </>
        
     );
}
 
export default Demos;