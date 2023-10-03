import './style.css';
import Navbar from './components/header/Navbar'
import ContainerCardItems from './components/components item/ContainerCardItems';
import DetailsItem from './components/components item/DetailsItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ <ContainerCardItems/>} />
        <Route path='item/:id' element={ <ContainerCardItems/>} />
        <Route path='/item/:idItem' element={ <DetailsItem />} />
        <Route path='category/:idCategory' element={ <ContainerCardItems/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
