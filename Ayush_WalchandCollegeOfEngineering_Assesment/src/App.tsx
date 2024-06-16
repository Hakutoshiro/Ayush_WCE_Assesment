import {Route , Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import ProductsPage from "./pages/ProductsPage"


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>                                                                                         
    </Routes>
  )
}

export default App
