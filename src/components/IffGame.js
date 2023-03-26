import { Fragment} from "react"
import SpecificPLayer from './SpecificPlayer';


const IffGame = (props) => {

    console.log("IffFame", props)

    return(
        <Fragment>
            <section className="playerDisplay wrapper">
                <div className="playerOne">
                    <SpecificPLayer draftablePlayers={props.playerData} />
                </div>
                <div className="playerTwo">
                    <SpecificPLayer draftablePlayers={props.playerData} />
                </div>
            </section>
        </Fragment>
    )
}

export default IffGame;