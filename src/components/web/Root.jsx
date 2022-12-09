import { Outlet } from "react-router"
import Header from "./Header"


function Root() {
  return (
    <main>
      <header>
        <Header></Header>
      </header>
      <Outlet />
    </main>
  )
}

export default Root