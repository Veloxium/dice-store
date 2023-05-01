import React from "react";
import Product from "./pages/product/Product";
import Landing from "./pages/landing/Landing";
import ProductList from "./pages/productlist/ProductList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ProductDetail from "./components/ProductDetail";
import BestProductDetail from "./components/BestProductDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Landing />} />
        <Route index path="/shop" element={<ProductList />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/product" element={<Product />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/product/:id" element={<ProductDetail />} />
        <Route index path="/bestproduct/:id" element={<BestProductDetail />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
