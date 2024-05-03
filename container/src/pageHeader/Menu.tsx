
import { Link } from "react-router-dom";



const Menu = () : JSX.Element => {

    //if user is logged in, render their name 
    //if not logged in render sign in button



    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>  
            <li><Link to="/">Home</Link></li>                
        </ul>
    );
}

export default Menu;
