import {useNavigate} from 'react-router-dom'
import React from "react";
import "../assets/home.css";

const Home = () =>{
    const navigate= useNavigate();
    const handleClick=()=>{
        navigate("/game");
    };
    return (
        
      <div className="homePage"> 
<button className="playButton" type="button"
onClick={handleClick}
>
  Play Game  
</button>

        
      </div>
    );
}

export default Home;