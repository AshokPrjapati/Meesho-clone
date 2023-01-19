import Header from "../components/Admin/Header"
import LeftNavbar from '../components/Admin/LeftNavbar'
import Content from '../components/Admin/Content'
import Navbar from "@/components/Navbar/Navbar"


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <LeftNavbar />
        <Header />
        <Content />
      </div>
    </>
  )
}
