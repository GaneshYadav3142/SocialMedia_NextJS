"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './(Components)/Navbar'
import { ApolloProvider } from '@apollo/client'
import client from './lib/apollo'
import PrivateRoute from './(Components)/PrivateRoute'

const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ApolloProvider client={client}>
        <Navbar/>
        {children}
        </ApolloProvider>
        </body>
    </html>
  )
}
