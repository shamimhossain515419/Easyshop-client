

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/Share/Navbar/Navbar'
import Footer from '@/Share/Footer/Footer'
import AuthProvider from '@/Component/AuthProvider/Authprovider'
import { Toaster } from 'react-hot-toast'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Shop',
  description: 'Generated by create next app',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <Navbar></Navbar>
          <div className=' min-h-[70vh]  pt-20'>
            {children}
          </div>
          <Footer></Footer>

        </AuthProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />


      </body>
    </html>
  )
}
