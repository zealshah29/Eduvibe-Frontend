import React from 'react'
import Navbar from './Navbar';
import "./index.css";

function Focus() {
    let textColor = {color: "#0D3244"};
    
    return (
        <>
        
        <div className='bg'>
        <div className='component-focus' >
            <div className='playlist'>
            <iframe src="https://open.spotify.com/embed/playlist/1zcLeBl01Krh6HIoyAShFB?utm_source=generator&theme=1" 
            width="135%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; 
            fullscreen; picture-in-picture"></iframe>
            </div>
            <div className='focus-text'>Music therapy improves your focus, reduces stress and promotes a more positive mindset.
                <br></br><br></br><br></br>
                <span style = {textColor}>Tune in to our curated playlist while studying, to increase your efficiency.</span>
            </div>
        </div>
        </div>
        </>
        
    );
}
export default Focus;