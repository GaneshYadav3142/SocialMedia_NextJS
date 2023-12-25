"use client"
import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from '../lib/graphql';
import Post from './Post';


const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_ALL_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(process.env.NEXT_PUBLIC_SECRET)
    return (
        <div className="w-3/4 content-center mx-28 mt-2">
            <div>
                <button>Add post</button>
            </div>
            <div>
          {data.getAllPost.map((element)=>{
            return <Post key={element._id} {...element}/>
          })}
          </div>
        </div>
    )
}

export default Dashboard