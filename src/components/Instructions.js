import { Fragment } from "react";
import { Link } from 'react-router-dom';
import Form from './Form'

const Instructions = (props) => {

    console.log("Instructions", props)

    return(
        <Fragment>
            <section className="instructions">
                <div className ="welcomeContainer">

                </div>
                <div>
                    <div className="rulesContainer wrapper">
                        <div className="logoSloganContainer">
                            <div className="logoContainer">

                            </div>
                            <h1>Love fantasy sports? <span>Hate the long term commitment?</span> Play in an <em>INSTANT</em> with IFF!</h1>
                        </div>
                            
                        <div>
                            <h2>How To Play:</h2>
                            <ul className="list">
                                <li><em>1.</em> Pick a year to draft in, then press "Face-Off"</li>
                                <li><em>2.</em> On the next screen, draft two players. </li>
                                <li><em>3.</em>Compare stats to see who wins each category. In all categories other than <strong>Turnovers</strong> the higher number wins.</li>
                                <li><em>4.</em> The player who wins majority of categories wins the matchup!</li>
                            </ul>
                        </div>
                        <div>
                            <h2>When To Play:</h2>
                            <ul className="list">
                                <li><em>1.</em> Settle a small bill!</li>
                                <li><em>2.</em> Decide who's right about that thing.</li>
                                <li><em>3.</em> Settle long standing family rivalries!</li>
                            </ul>
                        </div>
                        < Form />
                    </div>
                </div>
                
            </section>
        </Fragment>
        
        
    )
}

export default Instructions;