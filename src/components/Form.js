import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
    
    const [draftYear, setDraftYear] = useState()

    const chooseDraftYear = (event) => {
        event.preventDefault();
        console.log("Draft Year Func", event.target.firstChild.value)
        setDraftYear(event.target.firstChild.value)
        console.log(draftYear)
    }

    const handleChange = (event) => {
        setDraftYear(event.target.valueAsNumber)
        console.log(event.target.valueAsNumber)
    }


    return(

        <form className="draftYearForm" onSubmit={chooseDraftYear}>
            
            <input onChange={handleChange}type="number" min="1984" max="2022" placeholder="Draft Years - Jordan ('84) Bryant ('96) James ('03) Curry ('09) Doncic ('18)" required></input>
            <label className="sr-only">Select Draft Year</label>
            <Link to={`/IffGame/${draftYear}`} >
                <button>Face-Off!</button>
            </Link>
            
        </form>
        
    )
}

export default Form;