import { Fragment, useEffect } from 'react';

const StatsContainer = (props) => {

console.log("Stats", props)

    return(
        <Fragment>
            <h3><span>Name:</span> {props.playerData[props.draftedPlayer].player.first_name} {props.playerData[props.draftedPlayer].player.last_name}</h3>
            <h4><span>Team:</span> {props.playerData[props.draftedPlayer].team.full_name}</h4>
            <h4><span>Game:</span> {props.playerData[props.draftedPlayer].game.season}</h4>
            <ul className="statsContainer">
                <li>
                    <h5>Pts</h5>
                    <p>{props.playerData[props.draftedPlayer].pts}</p>
                </li>
                <li>
                    <h5>Reb</h5>
                    <p>{props.playerData[props.draftedPlayer].reb}</p>
                </li>
                <li>
                    <h5>Ast</h5>
                    <p>{props.playerData[props.draftedPlayer].ast}</p>
                </li>
                <li>
                    <h5>Blk</h5>
                    <p>{props.playerData[props.draftedPlayer].blk}</p>
                </li>
                <li>
                    <h5>Stl</h5>
                    <p>{props.playerData[props.draftedPlayer].stl}</p>
                </li>
                <li>
                    <h5>TO</h5>
                    <p>{props.playerData[props.draftedPlayer].turnover}</p>
                </li>
                <li>
                    <h5>FG%</h5>
                    <p>{props.playerData[props.draftedPlayer].fg_pct}</p>
                </li>
            </ul>
            </Fragment>
    )
}

export default StatsContainer;