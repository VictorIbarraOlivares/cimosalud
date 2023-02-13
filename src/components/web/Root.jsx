import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"


function Root() {
  return (
    <main className="main">
      <header>
        <Header></Header>
      </header>
      <Outlet />
      <footer>
        <Footer></Footer>
      </footer>
    </main>
  )
}

export default Root