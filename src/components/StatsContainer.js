import { Fragment, useEffect } from 'react';

const StatsContainer = (props) => {

console.log("Stats", props)

    return(
        <Fragment>
            <h3>Name: {props.playerData[props.draftedPlayer].player.first_name} {props.playerData[props.draftedPlayer].player.last_name}</h3>
            <h3>Team: {props.playerData[props.draftedPlayer].team.full_name}</h3>
            <h3>Game: {props.playerData[props.draftedPlayer].game.season}</h3>
            <ul className="statsContainer">
                <li>
                    <h4>Pts</h4>
                    <p>{props.playerData[props.draftedPlayer].pts}</p>
                </li>
                <li>
                    <h4>Reb</h4>
                    <p>{props.playerData[props.draftedPlayer].reb}</p>
                </li>
                <li>
                    <h4>Ast</h4>
                    <p>{props.playerData[props.draftedPlayer].ast}</p>
                </li>
                <li>
                    <h4>Blk</h4>
                    <p>{props.playerData[props.draftedPlayer].blk}</p>
                </li>
                <li>
                    <h4>Stl</h4>
                    <p>{props.playerData[props.draftedPlayer].stl}</p>
                </li>
                <li>
                    <h4>TO</h4>
                    <p>{props.playerData[props.draftedPlayer].turnover}</p>
                </li>
                <li>
                    <h4>FG%</h4>
                    <p>{props.playerData[props.draftedPlayer].fg_pct}</p>
                </li>
            </ul>
            </Fragment>
    )
}

export default StatsContainer;