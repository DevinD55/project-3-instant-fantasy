import { useState, useEffect} from "react"
import SpecificPLayer from './SpecificPlayer';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const IffGame = (props) => {


    const [draftStatus, setDraftStatus] = useState(false)
    const [playerData, setPlayerData] = useState([]);
    
    const userSelectedSeason = []
    const urlParams = useParams();
    const searchUserSeason = () => {
        userSelectedSeason.push(urlParams.draftYear)
    }

    searchUserSeason();


    useEffect(() => {
    axios({
        url: "https://www.balldontlie.io/api/v1/stats",
        params: {
            page: Math.floor(Math.random()* 207),
            per_page: 100,
            seasons: userSelectedSeason, 
        }
        
    })
        .then( (apiData) => {

        setPlayerData(apiData.data);
        })

    }, []);



    return(
            <section className="iffGame wrapper">
                <div className="tipsContainer">
                    <h2>Tips:</h2>
                    <ul className="list">
                    <p>The database includes stats for all games! Even the players who didn't play a single minute. To ensure a fun, fair matchup, follow the tips below, or ignore them and embrace the randomness! </p>
                    <li><em>1.</em> If a player has no stats, draft again!</li>
                    <li><em>2.</em> To ensure a good matchup, agree you will re-draft until both players have 5+ points.</li>
                    <li><em>3.</em> Remember! The higher number wins except category other than <strong>Turnovers.</strong>
                        </li>
                    </ul>
                </div>
                <section className="playerDisplay wrapper">
                    <div className="playerOne">
                        <SpecificPLayer draftStatus={draftStatus}draftablePlayers={playerData} />
                    </div>
                    <div className="playerTwo">
                        <SpecificPLayer draftStatus={draftStatus} draftablePlayers={playerData}/>
                    </div>
                </section>
                <Link to ="/">
                    <button>Pick a new draft year!</button>
                </Link>
            </section>
    )
}

export default IffGame;