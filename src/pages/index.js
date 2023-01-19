import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import AddProductPage from 'Admin_Components/AddProductPage'

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
