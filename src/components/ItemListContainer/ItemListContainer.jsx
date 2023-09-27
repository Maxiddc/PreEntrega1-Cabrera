import { Link } from "react-router-dom";
import './style.css'
const ItemListContainer = () => {

    return (
      <div className='container'>
        <Link className='textEnlace' to={`/`}>ArtEmi</Link>        
        <Link className='textEnlace' to={`/category/:idProduct`}>Muebles</Link>  
        <Link className='textEnlace' to={`/category/:idProduct`}>Hilos</Link> 
        <a className='textEnlace' href="#"> CONTACTO </a>
        
      </div>
    );
  };
  
  export default ItemListContainer;