import { Fragment } from "react"
// import { Link } from 'react-router-dom'
import SpecificPLayer from './SpecificPlayer';


const IffGame = (props) => {

    console.log("IffFame", props)

    // const randomPlayer = () => {
    //     const gameNumber = (Math.floor(Math.random()*25))
    //     console.log("randomPlayer has run");
    //     console.log(gameNumber)
    // }

    // randomPlayer();


    return(
        <Fragment>
            <div className="playerOne">
                <SpecificPLayer draftablePlayers={props.playerData.data} />
            </div>
            <div className="playerTwo">
                <SpecificPLayer draftablePlayers={props.playerData.data} />
            </div>
        </Fragment>
    )
}

export default IffGame;