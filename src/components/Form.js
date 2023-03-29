import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
    
    const [draftYear, setDraftYear] = useState(null)
    // const navigate = useNavigate();
    const chooseDraftYear = (event) => {
        event.preventDefault();
        setDraftYear(event.target.firstChild.value)
    }

    const handleChange = (event) => {
        setDraftYear(event.target.valueAsNumber)
    }

    return(

        <form className="draftYearForm" onSubmit={chooseDraftYear}>
            
            <input 
            onChange={handleChange}
            type="number" 
            min="1984" max="2022" 
            placeholder="Pick Draft Year! Ex. Jordan ('84) Bryant ('96) James ('03) Curry ('09) Doncic ('18)"
            required>

            </input>
            <label className="sr-only">Select Draft Year</label>
            <Link to={`/IffGame/${draftYear}`} >
                <button type="submit">Face-Off!</button>
            </Link>
            
        </form>
        
    )
}

export default Form;