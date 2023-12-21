"use client"

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "./lib/graphql";

export default function Home() {

  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  return (
      <div>
        {data.map((el)=>{
          return <li key={el._id}>{el.description}</li>
        })}
      </div>
  )
}
