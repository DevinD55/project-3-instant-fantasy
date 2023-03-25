import { Fragment, useState } from "react"
import SpecificPLayer from './SpecificPlayer';


const IffGame = (props) => {

    console.log("IffFame", props)

    const [draftNumber, setDraftNumber] = useState();

    const draftPlayer = () => {
        const draftedPlayer = Math.floor(Math.random()*25);
        setDraftNumber(draftedPlayer);
    }

    return(
        <Fragment>
            <div className="playerOne">
                <SpecificPLayer draftablePlayers={props.playerData} />
            </div>
            <div className="playerTwo">
                <SpecificPLayer draftablePlayers={props.playerData} />
            </div>
        </Fragment>
    )
}

export default IffGame;