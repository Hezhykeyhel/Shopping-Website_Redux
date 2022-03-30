import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetails from './containers/ProductDetails'
import ProductsListing from './containers/ProductsListing'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<ProductsListing/>}/>
      <Route path='/products/:productId' element={<ProductDetails/>}/>
      <Route>404 Babe, Page Not Found</Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App