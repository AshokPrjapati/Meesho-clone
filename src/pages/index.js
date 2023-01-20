
import {  Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "../components/Admin/Header"
import LeftNavbar from '../components/Admin/LeftNavbar'
import Content from '../components/Admin/Content'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <LeftNavbar />
        <Header />
        <Content />
      </div>
     
    </>
  )
}
