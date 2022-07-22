import React from 'react' 
import { useNavigate } from 'react-router-dom'; 


const HomeScreen = () => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        alert("button clicked")
        navigate("/details/pikachu")
    }
    
    return (
      <div>
        <h1>Homescreen</h1>
        <button onClick={handleClick}>Go Away</button>
      </div>
    );
}
export default HomeScreen