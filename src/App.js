import './App.css';
import Instructions from './components/Instructions.js';
import IffGame from './components/IffGame'
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Error from './components/Error';

const App = () => {

    return(
    <div className="totalContainer">
        <nav>
            <ul className="menu">
                <Link to="/">
                    <li>Instant Fantasy Face-Off</li>
                </Link>
                
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={ <Instructions />} />
            <Route path="/IffGame/:draftYear" element={ <IffGame />} />
            <Route path="/IffGame/" />
            <Route path="*" element={ <Error />} />
            <Route path="IffGame/undefined" element ={ <Error />} />
            <Route path="IffGame/NaN" element ={ <Error />} />
            <Route path="IffGame/null" element ={ <Error />} />

        </Routes>

        <Footer />
    </div>
    );
}

export default App;

// 