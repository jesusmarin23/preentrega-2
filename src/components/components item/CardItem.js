import Image from "./image";
import "../../styles/cardItem.css";
import Description from "./Description";
import Buttondetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import cart from "../../img/cart-white.svg";

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Image imagen={props.imagen} />

      <Description
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="buttons">
        <Link to={`/item/${props.id}`}>
          <Buttondetalles txt="Ver detalles" />
        </Link>

        <ButtonAddCart id={props.id} svg={cart} />
      </div>
    </div>
  );
};

export default CardItem;
