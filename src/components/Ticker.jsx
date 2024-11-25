import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Ticker = () => {
    return(
        <div className="container mx-auto w-11/12">
            <div className="bg-gray-200 p-3 flex"> 
                <span className="bg-red-400 text-white px-5 py-2 mr-2"> Latest </span> 
                <Marquee className="flex"> 
                    <Link to="/news"> I can be a React component, multiple React components, or just some text. </Link> 
                    <Link to="/news"> React is an awesome. </Link>
                </Marquee> 
            </div>
        </div>
    );
}
export default Ticker;