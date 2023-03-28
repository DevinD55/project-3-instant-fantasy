import { Link } from 'react-router-dom';

const Error =() => {
    return(
    <section className="error wrapper">
        <h2>Sorry, this page does not exist!</h2>
        <Link to="/">
            <button>Oopps, take me back!</button>
        </Link>
    </section>
        


    )
}

export default Error;