
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner2.jpg'; // Use default import
import women_banner from './Components/Assets/women_banner.jpg'; // Use default import
import kids_banner from './Components/Assets/kids_banner.jpg'; // Use default import


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}></Route>
        </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<LoginSignup/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
