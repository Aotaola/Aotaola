import React from 'react';
import ReactPlayer from 'react-player';
import NightlifeApp from './vids/NighlifeApp.mp4';
import sapiam_Demo from './vids/sapiam_Demo.mp4';



const Demos = () => {

    return ( 
        
        <div className="demos-container">
            <br/>
            <h1>Project Demos</h1>
            <div className="demos-content">
                <br/>
                    <div className="player-wrapper">
                    <iframe title="My Unique Video Title"
                    width='95%'
                    height='95%'
                     src="https://www.loom.com/embed/f4daf59699c6421aaf5bc8b255c3c90d?sid=05e82a5b-203a-40e7-a48d-2e34dc5e5a62" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                    </iframe>
                    </div>
                <br/>
            </div>
            <br/>
            <div className="demos-content">
                <br/>
                    <div className="player-wrapper">
                    <iframe 
                     title="Unique Video Title"
                     width='95%'
                     height='95%'
                    src="https://www.loom.com/embed/edcbe895c8ce499ba8059f71d8095ade?sid=b93dd829-51db-4dd7-996c-0c0575bdaef0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen >
                    </iframe>
                    </div>
                <br/>
            </div>
            <div className="demos-content">
                <div className="player-wrapper">
                    <ReactPlayer url = {sapiam_Demo}
                        controls   
                        playbackRate={1.25}/>
                </div>
                    <button className="demo-visit-button">
                        <a href = "https://sapiam-f41e9ce79228.herokuapp.com/" > Visit Sapiam </a>
                    </button>
            </div>
            <div className="demos-content">
                <br/>
                <div className="player-wrapper">
                    <ReactPlayer url = {NightlifeApp}
                        controls   
                        playbackRate={1.25}/>
                </div>
            </div>
            <br/>
        </div>
     );
}
 
export default Demos;