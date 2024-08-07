import { Outlet } from "react-router-dom"
import Header from "./Header"
import './MainLayout.scss'

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </>
  )
}

export default MainLayout
