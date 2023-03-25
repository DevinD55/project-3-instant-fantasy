import './App.css';
import Instructions from './components/Instructions.js';
import IffGame from './components/IffGame'
// import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {



    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
    axios({
        url: "https://www.balldontlie.io/api/v1/stats",
        method: "GET",
        params: {
            page: Math.floor(Math.random()* 61690)
        }
        
    })
        .then( (response) => {

        setPlayerData(response.data);
        })

    }, []);


    return(
    <div>
        <nav className="menu">
            <ul>
                <li>IFF!</li>
            </ul>
        </nav>
        <div className = "gameContainer">
            < Instructions />
            < IffGame playerData={playerData}/>
        </div>
    </div>
    );
}

export default App;

// 