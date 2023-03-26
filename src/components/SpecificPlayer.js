import { Fragment, useState } from 'react';
import StatsContainer from './StatsContainer';

const SpecificPlayer = (props) => {

    console.log("specific", props)
    const [draftNumber, setDraftNumber] = useState("");
    const [draftStatus, setDraftStatus] = useState(false)

    const draftPlayer = () => {
        const draftedPlayer = Math.floor(Math.random()*25);
        setDraftNumber(draftedPlayer);
        console.log(draftNumber)
        setDraftStatus(true)
    }

    console.log(draftStatus)

    return(
        <Fragment>
            {draftStatus && <StatsContainer playerData={props.draftablePlayers.data} draftedPlayer={draftNumber}/> }
            <button onClick={draftPlayer}>Draft Player</button>
        </Fragment>
    )
}

export default SpecificPlayer;