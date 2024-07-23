import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import banner_mens from './Components/assets/banner_mens.png'
import banner_women from './Components/assets/banner_women.png'
import banner_kids from './Components/assets/banner_kids.png'
import './index.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={banner_mens} category="men" /> }  />
          <Route path="/womens" element={<ShopCategory banner={banner_women} category="women" /> }  />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />  } />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;