import { Fragment } from "react"

const SpecificPlayer = () => {
    return(
        <Fragment>
            <h3>Player Name</h3>
                <ul className="statsContainer">
                    <li>
                        <h4>Pts</h4>
                        <p></p>
                    </li>
                    <li>
                        <h4>Reb</h4>
                        <p>0</p>
                    </li>
                    <li>
                        <h4>Ast</h4>
                        <p>0</p>
                    </li>
                    <li>
                        <h4>Blk</h4>
                        <p>0</p>
                    </li>
                    <li>
                        <h4>Stl</h4>
                        <p>0</p>
                    </li>
                    <li>
                        <h4>TO</h4>
                        <p>0</p>
                    </li>
                    <li>
                        <h4>FG%</h4>
                        <p>0</p>
                    </li>
                </ul>
        </Fragment>
    )
}

export default SpecificPlayer;