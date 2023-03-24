import { Fragment } from "react"

const SpecificPlayer = (props) => {

    console.log("specific", props)

    const draftedPlayer = Math.floor(Math.random()*25);

    console.log(props.draftablePlayers[draftedPlayer])

    return(
        <Fragment>
            <h3>Player Name</h3>
                <ul className="statsContainer">
                    <li>
                        <h4>Pts</h4>
                        <p>{props.draftablePlayers[draftedPlayer].pts}</p>
                    </li>
                    <li>
                        <h4>Reb</h4>
                        <p>{props.draftablePlayers[draftedPlayer].reb}</p>
                    </li>
                    <li>
                        <h4>Ast</h4>
                        <p>{props.draftablePlayers[draftedPlayer].ast}</p>
                    </li>
                    <li>
                        <h4>Blk</h4>
                        <p>{props.draftablePlayers[draftedPlayer].blk}</p>
                    </li>
                    <li>
                        <h4>Stl</h4>
                        <p>{props.draftablePlayers[draftedPlayer].stl}</p>
                    </li>
                    <li>
                        <h4>TO</h4>
                        <p>{props.draftablePlayers[draftedPlayer].turnover}</p>
                    </li>
                    <li>
                        <h4>FG%</h4>
                        <p>{props.draftablePlayers[draftedPlayer].fg_pct}</p>
                    </li>
                </ul>
                <button>Draft Player</button>
        </Fragment>
    )
}

export default SpecificPlayer;