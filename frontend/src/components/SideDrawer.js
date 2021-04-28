import './SideDrawer.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const SideDrawer = ({ show, click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }


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
                        Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
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