import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'; 
import Andrew from './Andrew'
import Brady from './Brady'

const TeamScreen = () => {
    return (
        <div>
            <h1>Meet The Team!</h1>
            <h2>Pick a team member</h2>
            <Link to="/Team/Brady"><button>Brady</button></Link>
            <Link to="/Team/Andrew"><button>Andrew</button></Link>
            <Routes>
                <Route path="Brady" element={<Brady /> } />
                <Route path="Andrew" element={<Andrew /> } />
            </Routes>
        </div>
    )
}
export default TeamScreen;