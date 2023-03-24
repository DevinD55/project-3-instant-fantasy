import './App.css';
import Instructions from './components/Instructions.js';
import IffGame from './components/IffGame'
// import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {



    const [player, setPlayer] = useState([]);

    useEffect(() => {
    axios({
        url: "https://www.balldontlie.io/api/v1/stats",
        method: "GET",
        params: {
            page: Math.floor(Math.random()* 61690)
        }
        
    })
        .then( (response) => {

        setPlayer(response.data);
        })

    }, []);

    // const randomizePlayer = () => {
    //     const playerNumber = Math.floor(Math.random()*25);

    //     const specificPlayer = player.data[playerNumber];

    //     console.log(specificPlayer)
    // }

    // randomizePlayer();

    // console.log(player)

    return(
    <div>
        <nav className="menu">
            <ul>
                <li>IFF!</li>
            </ul>
        </nav>
        <div className = "gameContainer">
            < Instructions />
            < IffGame playerData={player}/>
        </div>
        
        {/* <Routes>
            <Route path="/" element={ <Instructions /> } />
            <Route path="/IffGame" element={ <IffGame /> } />
        </Routes> */}
    </div>
    );
}

export default App;

