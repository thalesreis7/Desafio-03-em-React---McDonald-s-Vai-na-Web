import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import AppPage from "./Components/Pages/AppPage/AppPage"
import NotFound404 from "./Components/Pages/NotFound404/NotFound404"

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home/>}></Route>
          <Route path= "/appPage" element={<AppPage/>}></Route>
          <Route path= "/NotFound404" element={<NotFound404/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
