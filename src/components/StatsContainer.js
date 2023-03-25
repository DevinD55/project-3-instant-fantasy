import { Fragment, useState } from 'react';

const StatsContainer = (props) => {

console.log("Stats", props)

console.log(props.draftedPlayer)

// console.log(props.draftablePlayers[props.draftedPlayer])


    return(
        <Fragment>
            <ul className="statsContainer">
                <li>
                    <h4>Pts</h4>
                    {/* {pointsDisplay} */}
                </li>
                <li>
                    <h4>Reb</h4>
                    {/* <p>{props.draftablePlayers[draftedPlayer].reb}</p> */}
                </li>
                <li>
                    <h4>Ast</h4>
                    {/* <p>{props.draftablePlayers[draftedPlayer].ast}</p> */}
                </li>
                <li>
                    <h4>Blk</h4>
                    {/* <p>{props.draftablePlayers[draftedPlayer].blk}</p> */}
                </li>
                <li>
                    <h4>Stl</h4>
                    {/* <p>{props.draftablePlayers[draftedPlayer].stl}</p> */}
                </li>
                <li>
                    <h4>TO</h4>
                    {/* <p>{props.draftablePlayers[draftedPlayer].turnover}</p> */}
                </li>
                <li>
                    <h4>FG%</h4>
                    {/* <p>{props.draftablePlayers[draftedPlayer].fg_pct}</p> */}
                </li>
            </ul>
            </Fragment>
    )
}

export default StatsContainer;