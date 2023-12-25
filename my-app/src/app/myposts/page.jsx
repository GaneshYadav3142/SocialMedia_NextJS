"use client"
import React from 'react'
import MyPosts from '../(Components)/MyPosts'
import PrivateRoute from '../(Components)/PrivateRoute'

 const MyPost = () => {
  return (
    <div>
     <PrivateRoute>
        <MyPosts/>
        </PrivateRoute>
    </div>
  )
}

export default  MyPost