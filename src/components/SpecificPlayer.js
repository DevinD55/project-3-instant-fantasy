import { Fragment, useState } from 'react';
import StatsContainer from './StatsContainer';

const SpecificPlayer = (props) => {

    const [draftNumber, setDraftNumber] = useState("");
    const [draftStatus, setDraftStatus] = useState(false)
    

    const draftPlayer = () => {
        const draftedPlayer = Math.floor(Math.random()*100);
        setDraftNumber(draftedPlayer);
        setDraftStatus(true)
    }

    return(
        <Fragment>
            <section className="draftedPlayer">
                {draftStatus && <StatsContainer playerData={props.draftablePlayers.data} draftedPlayer={draftNumber} /> }
                <button onClick={draftPlayer}>Draft Player</button>
            </section>
            
        </Fragment>
    )
}

export default SpecificPlayer;