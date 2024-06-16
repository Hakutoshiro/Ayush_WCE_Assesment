import { Outlet } from "react-router-dom"
import NavbarComponent from "./components/Navbar"
import Footer from "./components/Footer"



export default function Layout() {
  return (
    <>
        <NavbarComponent/>
        <div className="min-h-screen">
          <Outlet  />
        </div>
        <Footer />
    </>
  )
}