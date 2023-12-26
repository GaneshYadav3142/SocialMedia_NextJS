"use client"

import { useEffect } from "react"
import Dashboard from "./(Components)/Dashboard"
import PrivateRoute from "./(Components)/PrivateRoute"


export default function Home() {
    
 
  return (
   <div>
    <PrivateRoute>
      <Dashboard/>
    </PrivateRoute>
    </div>
  )
  
}
