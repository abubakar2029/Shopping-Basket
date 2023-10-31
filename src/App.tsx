import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { AllCategoriesBar } from "./Components/AllCategories/AllCategories";

import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <div className="bg-quaternary-color">
      <Navbar/>
      <BrowserRouter>
      <AllCategoriesBar/>
        <Routes>
          <Route path="/:uID?" element={<Home />} />
          <Route path="/temp" element={<ProductsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:uID?/productsPage/:category?" element={<ProductsPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
