import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return(
        <div className="container mx-auto w-11/12 mb-5">
            <div className="logo text-center">
                <img src={logo} alt="Logo" className="mx-auto py-5" />
                <p className="text-xl font-bold text-gray-600 mb-2"> The best newspaper in the World </p>
                <p className="text-gray-600"> {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
            </div>
        </div>
    );
}
export default Header;