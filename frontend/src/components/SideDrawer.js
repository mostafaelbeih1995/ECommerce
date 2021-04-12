import './SideDrawer.css';
import { Link } from "react-router-dom";
const SideDrawer = ({ show, click }) => {
    const sideDraweClass = ["sidedrawer"];
    if (show) {
        sideDraweClass.push("show");
    }
    return <div className={sideDraweClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <li>
                <Link to = "/cart">
                    <i className = "fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className= "sidedrawer__cartbadge">0</span>
                    </span>
                    
                </Link>
            </li>
            <li>
                <Link to = "/">Shop</Link>
            </li>
        </ul>
    </div>;
}

export default SideDrawer;