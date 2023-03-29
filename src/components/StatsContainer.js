import { useEffect } from 'react';

const StatsContainer = (props) => {


    const playerStat = props.playerData[props.draftedPlayer]

    return(
            <section className="playerInformation">
                <h3><span>Name:</span> {playerStat.player.first_name} {playerStat.player.last_name}</h3>
                <h4><span>Team:</span> {playerStat.team.full_name}</h4>
                <h4><span>Season:</span> {playerStat.game.season}</h4>
                <ul className="statsContainer">
                    <li>
                        <h5>Pts</h5>
                        <p>{playerStat.pts}</p>
                    </li>
                    <li>
                        <h5>Reb</h5>
                        <p>{playerStat.reb}</p>
                    </li>
                    <li>
                        <h5>Ast</h5>
                        <p>{playerStat.ast}</p>
                    </li>
                    <li>
                        <h5>Blk</h5>
                        <p>{playerStat.blk}</p>
                    </li>
                    <li>
                        <h5>Stl</h5>
                        <p>{playerStat.stl}</p>
                    </li>
                    <li>
                        <h5>TO</h5>
                        <p>{playerStat.turnover}</p>
                    </li>
                    <li>
                        <h5>FG%</h5>
                        <p>{((playerStat.fg_pct)*100).toFixed(2)}</p>
                    </li>
                </ul>
            </section>
    )
}

export default StatsContainer;