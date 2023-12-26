import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_POST } from '../lib/graphql'
import { toast } from 'react-toastify'

const MyForm = ({onClose}) => {
    const [addPost, {loading,error}] = useMutation(ADD_POST)
    const [newPost,setNewPost]=useState({image:"", description:""})


    const handelForm=async (e)=>{
        e.preventDefault()
        try {
            const { data } = await addPost({ variables: { post: newPost } });
             toast.success("Post Created")
             onClose()
          } catch (error) {
           
            toast.error(error.message)
          }
    }
  return (
    <div className="p-4">
  <form onSubmit={handelForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
        Enter Image
      </label>
      <input
        type="text"
        id="image"
        placeholder="Enter Image URL"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
        Enter Description
      </label>
      <input
        type="text"
        id="description"
        placeholder="Enter Description"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Post
    </button>
  </form>
</div>

  )
}

export default MyForm