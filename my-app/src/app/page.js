"use client"

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "./lib/graphql";
import Post from "./(Components)/Post";

export default function Home() {

  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(process.env.NEXT_PUBLIC_SECRET)
  return (
      <div className="w-60 ">
        {data.getAllPost.map((element)=>{
          return <Post key={element._id} {...element}/>
        })}
      </div>
  )
}
