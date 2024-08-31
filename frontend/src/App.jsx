import Navbar from './components/Navbar'
import './App.css'
import Product from './components/Product'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Productdetail from './components/Productdetail'
import Cart from './components/Cart'
import Searchitem from './components/Searchitem'
import { items } from './components/Data'
import { useState } from 'react'

function App() {
 const [data,setData] = useState([...items])
 const [cart,setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar setData={setData} cart={cart}/>
    <Routes>
      <Route path='/' element={<Product items={data} cart={cart} setCart={setCart}/>}/>
      <Route path="/product/:id" element={<Productdetail  cart={cart} setCart={setCart}/>}/>
      <Route path="/search/:term" element={<Searchitem  cart={cart} setCart={setCart}/>}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
