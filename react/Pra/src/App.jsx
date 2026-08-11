import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Users from './pages/Users'
import Product from './pages/Product'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="users" element={<Users />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App