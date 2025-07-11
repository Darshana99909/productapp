import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct';
import SearchProduct from './Components/SearchProduct';
import DeleteProduct from './Components/DeleteProduct';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element= { <AddProduct/> } />
        <Route path="/SearchProduct" element= { <SearchProduct/> } />
        <Route path="/DeleteProduct" element= { <DeleteProduct/> } />
        <Route path="/ViewAll" element= { <ViewAll/> } />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
