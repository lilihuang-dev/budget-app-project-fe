import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <nav className="navBar">
            <h1>
                <Link to="/transactions">Budget App</Link>
            </h1>
            <Link to="/"><img src="https://images.moneycontrol.com/static-mcnews/2021/12/budget-2022-770x433.jpg" alt="navBar-img" /></Link>
            <button>
                <Link to="/transactions/new">NEW TRANSACTION</Link>
            </button>
        </nav>
    )
}

export default NavBar;