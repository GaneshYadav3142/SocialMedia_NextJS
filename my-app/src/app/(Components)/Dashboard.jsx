"use client"
import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from '../lib/graphql';
import Post from './Post';
import Modal from './Modal';
import MyForm from './MyForm';


const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_ALL_POSTS);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(()=>{
    
    },[])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(process.env.NEXT_PUBLIC_SECRET)

   
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

    return (
      <div className="w-3/4 mx-auto mt-2">
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Open Modal
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <MyForm onClose={closeModal} />
        </Modal>
      </div>
      
      <div>
        {data.getAllPost.map((element) => (
          <Post key={element._id} {...element} />
        ))}
      </div>
    </div>
    
    )
}

export default Dashboard