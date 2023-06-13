import React from 'react';
import ReactPlayer from 'react-player';

const Demo = () => {
    return ( 
        <div className="demo-container">
            <h1>THIS IS THE DEMO PAGE</h1>
            <div classname = "demo-card">
                <ReactPlayer 
                url = "https://www.loom.com/share/4af3e8ff9bf744aea49d341fcf275ed6?sid=1f5ee7e3-b4af-4802-a795-d31c48f592ce" 
                className="demo-video" 
                controls
                />
            </div>

        </div>
     );
}
 
export default Demo;