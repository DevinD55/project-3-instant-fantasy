import { Fragment } from "react";
// import { Link } from 'react-router-dom';



const Instructions = (props) => {

    console.log("Instructions", props)

    return(
        <Fragment>
            <section className="instructions">
                <h1>Love fantasy sports? <span>Hate the long term commitment?</span> Play in an <em>INSTANT</em> with IFF</h1>
                <h2>Learn How To Play:</h2>
                <ul className="rulesList">
                    <li>1. Press "Draft Player" to randomly select a player.</li>
                    <li>2. After player 1 and 2 are drafted, compare stats to see who wins each category. In all categories other than <strong>Turnovers</strong> the higher number wins.</li>
                    <li>3. The player who wins 4+ categories wins the matchup!</li>
                </ul>
                <h2>When To Play:</h2>
                <ul className="whenToPlay">
                    <li>1. Settle a small bill!</li>
                    <li>2. Decide who's right about that thing you're always arguing about</li>
                    <li>3. Settle long standing familial rivalries without resorting to violence... again.</li>
                </ul>
            </section>
        </Fragment>
        
        
    )
}

export default Instructions;