import React from 'react'
import img1 from './home-img1.png'
import img2 from './home-img2.png'
import img3 from './home-img3.png'

export function Home() {
    let title = {
        width: "1366px",
        height: "81px",
        background: "white",
        boxShadow: "0px 1px 50px rgba(0,0,0,0.07)",
      };
      let logo = {
        color: "#46F481",
        fontFamily: "inherit",
        fontSize: "24px",
        fontWeight: 700,
        fontStyle: "normal",
        letterSpacing: "0.04em"
      };
      let img = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%"
      }
     
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={title}>
        <div class="container-fluid">
          <p style={logo}>Eduvibe</p>
        </div>
       </nav>
       <div>
       <img className="img1" src={img1} style={img}/>
       <img className="img2" src={img2} style={img}/>
       <img className="img3" src={img3} style={img}/>
       </div>
        </div>
    )
}

export default Home;
