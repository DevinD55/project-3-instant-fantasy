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
            page: Math.floor(Math.random()* 44840),
            seasons: [
                1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
                2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
                2020, 2021, 2022
            ]
        }
        
    })
        .then( (response) => {

        setPlayerData(response.data);
        })

    }, []);


    return(
    <div className="wrapper">
        <nav className="menu">
            <ul>
                <li>Instant Fanntasy Face-Off</li>
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