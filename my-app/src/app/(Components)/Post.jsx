"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Post = ({userData, image, description, comment}) => {
     const [toggleComment,setToggelComment]=useState(false)

     const handleComment =()=>{
       setToggelComment(!toggleComment)
     }
  return (
    <div className="w-60 md:w-full">
    <div className="bg-white shadow-lg p-4 rounded-md mb-4">
    <h2 className="text-2xl font-semibold mb-2">{userData.username}</h2>
    <div className="mb-4">
      <img src={image} alt="Post Image" className="w-full h-auto rounded-md" />
    </div>
    <div className="mb-2">
      <p className="text-gray-700">{description}</p>
    </div>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700"
      onClick={handleComment}
      disabled={comment.length==0}
    >
      See Comments
    </button>
    {toggleComment && (
      <div className="mt-4">
        {comment.map((el) => (
          <li key={el._id} className="text-gray-600">
            {el.description} - {el.name}
          </li>
        ))}
      </div>
    )}
  </div>
  </div>
  )
}


export default Post