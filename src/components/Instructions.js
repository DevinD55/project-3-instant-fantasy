import { Fragment } from "react";
// import { Link } from 'react-router-dom';



const Instructions = (props) => {

    console.log("Instructions", props)

    return(
        <Fragment>
            <section className="instructions">
                <h1>Love fantasy sports? <span>Hate the long term commitment?</span> Play in an <em>INSTANT</em> with IFF!</h1>
                <div className="wrapper">
                    <h2>How To Play:</h2>
                    <ul className="rulesList">
                        <li><em>1.</em> Press "Draft Player" to randomly select a player.</li>
                        <li><em>2.</em> After player 1 and 2 are drafted, compare stats to see who wins each category. In all categories other than <strong>Turnovers</strong> the higher number wins.</li>
                        <li><em>3.</em> The player who wins majority of categories wins the matchup!</li>
                    </ul>
                    <h2>When To Play:</h2>
                    <ul className="whenToPlay">
                        <li><em>1.</em> Settle a small bill!</li>
                        <li><em>2.</em> Decide who's right about that thing.</li>
                        <li><em>3.</em> Settle long standing family rivalries!</li>
                    </ul>
                </div>
            </section>
        </Fragment>
        
        
    )
}

export default Instructions;