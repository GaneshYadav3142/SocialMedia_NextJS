"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react'

const PrivateRoute = ({children}) => {

    const router = useRouter();
   const token = Cookies.get("token")
   if(!token){
    router.push("/login")
   }
    

 
   return token ? children : router.push("/login")
 
}

export default PrivateRoute