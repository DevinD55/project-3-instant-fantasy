import { Fragment, } from 'react';
import StatsContainer from './StatsContainer';

const SpecificPlayer = (props) => {

    console.log("specific", props)

    return(
        <Fragment>
            <h3>Player Name</h3>
            {/* <StatsContainer draftablePlayers={props.draftablePlayers.data} draftedPlayer={draftNumber}/> */}
            <button>Draft Player</button>
        </Fragment>
    )
}

export default SpecificPlayer;