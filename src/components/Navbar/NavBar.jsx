
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./style.css";


const Navbar = () => {
    return (
      <div className="navbar">    
      <ItemListContainer/>  
      <CartWidget/>
      </div>
    );
  };
  
  export default Navbar;
  