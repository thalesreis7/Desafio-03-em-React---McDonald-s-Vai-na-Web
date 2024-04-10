import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import AppPage from "./Components/Pages/AppPage/AppPage"
import NotFound404 from "./Components/Pages/NotFound404/NotFound404"
import Pedidos from "./Components/Pages/Pedidos/Pedidos"

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home/>}></Route>
          <Route path= "/appPage" element={<AppPage/>}></Route>
          <Route path= "*" element={<NotFound404/>}></Route>
          <Route path= "/Pedidos" element={<Pedidos/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
