import { Fragment } from "react";
// import { Link } from 'react-router-dom';



const Instructions = (props) => {

    console.log("Instructions", props)

    return(
        <Fragment>
            <h1>Love fantasy sports? <span>Hate the long term commitment?</span> Play in an <em>INSTANT</em> with IFF</h1>
            <h2>Learn How To Play:</h2>
            <p>Rules: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, beatae dolorem itaque aliquam officia, nostrum pariatur nesciunt obcaecati assumenda totam enim rem inventore. Porro, veniam architecto aliquid commodi voluptatibus neque.
            Molestias minus aliquid perspiciatis consectetur, facere, accusantium temporibus quos dolore, dolor nesciunt cupiditate iste velit illum at beatae ipsam ex nam tempore? Autem aliquid delectus facere quibusdam saepe consectetur quos!</p>
            <a className="btn">
                {/* <Link to="/IffGame">Face-Off!</Link> */}
            </a>
        </Fragment>
        
        
    )
}

export default Instructions;