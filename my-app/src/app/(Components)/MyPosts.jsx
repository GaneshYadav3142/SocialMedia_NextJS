"use client"
import React, { useEffect } from 'react'
import jwt from "jsonwebtoken"
import Cookies from 'js-cookie';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_POST, GET_USER_POSTS } from '../lib/graphql';
import Post from './Post';
import { jwtDecode } from 'jwt-decode';
const MyPosts = () => {
    const token = Cookies.get('token');
    const decoded = jwtDecode(token); 
    
    
    const { loading, error, data } = useQuery(GET_USER_POSTS,{
        variables: { userId: decoded.userId  },
    });

    const [deletePost] = useMutation(DELETE_POST)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data)

  return (
    <div>
    
       {data.userPost.map((element)=>{
          return <Post key={element._id} {...element}/>
        })}
    </div>
  )
}

export default MyPosts