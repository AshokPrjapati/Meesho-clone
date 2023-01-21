import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Header from "../components/Admin/Header"
import LeftNavbar from '../components/Admin/LeftNavbar'
import Content from '../components/Admin/Content'


import Navbar from '@/components/Navbar/Navbar'


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  )
}
