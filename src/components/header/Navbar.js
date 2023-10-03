import Brand from './Brand';
import ItemsListContainer from './ItemsListContainer';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <header>
    <div className="containerBrand">
        <Brand/>
    </div>


    <nav className="containerItemList">
        <ItemsListContainer
            itemUno = "Procesadores"
            itemDos =  "Motherboards"
            itemTres = "Fuentes"
            itemCuatro = "Placas de video"

        />
    </nav>

    <div className="containerCart">
        <CartWidget/>
    </div>
  </header>
  )
}

export default Navbar;


