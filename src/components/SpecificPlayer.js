import { Fragment, useState } from 'react';
import StatsContainer from './StatsContainer';

const SpecificPlayer = (props) => {

    console.log("specific", props)
    const [draftNumber, setDraftNumber] = useState("");
    const [draftStatus, setDraftStatus] = useState(false)
    const [pageNumber, setPageNumber] = useState("")

    

    const draftPlayer = () => {
        const randomPage = Math.floor(Math.random()* 44844);
        setPageNumber(randomPage)
        const draftedPlayer = Math.floor(Math.random()*100);
        setDraftNumber(draftedPlayer);
        console.log(draftNumber)
        setDraftStatus(true)
    }

    console.log(draftStatus)

    return(
        <Fragment>
            <section className="draftedPlayer">
                {draftStatus && <StatsContainer playerData={props.draftablePlayers.data} draftedPlayer={draftNumber}/> }
                <button onClick={draftPlayer}>Draft Player</button>
            </section>
            
        </Fragment>
    )
}

export default SpecificPlayer;