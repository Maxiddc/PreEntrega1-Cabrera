import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, descripcion, urlImage }) => {
  return (
    <div>
      <img style={{width:"200px", height:"120px"}} src={urlImage} />
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <Link to={`/item/${id}`}>Ver Más</Link>
    </div>
  );
};

export default Item;
