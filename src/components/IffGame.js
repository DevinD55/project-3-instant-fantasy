import { Fragment } from "react"
import { Link } from 'react-router-dom'
import SpecificPLayer from './SpecificPlayer';


const IffGame = (props) => {

    return(
        <Fragment>
            <div className="playerOne">
            <h3>Draft Player!</h3>
            <button></button>
            </div>
            <div className="playerTwo">
                <h3>Draft Player!</h3>
                {/* Each player container at this point should have a button on it to randomize the player id number. The above info shold be stored in a new component called specificPlayer. */}
            </div>
        </Fragment>
    )
}

export default IffGame;