import Image from "./image";
import Description from "./Description";
import "../../styles/detailsitem.css";
import ButtonDetalles from "./Buttondetalles";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCantCart from "./AddCantCart";

const DetailsItem = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    fetchSimulation(
      productos.filter((flt) => flt.id === idItem),
      2000
    )
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="detailsItem">
      {datos.map( items => (
        <>
          <div className="containerLeft">
            <Image Image={items.imageProduct.firstImage} />
          </div>

          <div className="containerRight">
            <Description
              title={items.title}
              parrafo={items.description}
              cantidad={items.stock}
              precio={items.price}
            />
          

          <div className="buttons">
            <AddCantCart cant={5} />

            <ButtonDetalles txt="Agregar al carrito" />
          </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DetailsItem;
