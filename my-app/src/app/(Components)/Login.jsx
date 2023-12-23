"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { LOGIN_USER } from '../lib/graphql';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

const Login = () => {

    const router = useRouter()
    const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handelLogin = async () => {
        console.log(email,password)
        try {
          const { data } = await loginUser({ variables: { email:email,password:password } });
        Cookies.set('token', data.loginUser.token, { secure: true });
        alert("Login Successful")
          router.push("/")
        } catch (error) {
          console.error( error);
        }
      };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
                type="email" 
                id="email" 
                className="mt-1 p-2 w-full border rounded-md" 
                placeholder="Enter Email"
                required  
                value={email} 
                onChange={(e) => setEmail( e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password-field" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
                type="password" 
                id="password-field" 
                className="mt-1 p-2 w-full border rounded-md" 
                placeholder="Enter Password"
                required  
                value={password} 
                onChange={(e) => setPassword( e.target.value)}
            />
        </div>
        <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={handelLogin}
        >
            Login
        </button>
        <Link href="/signup" className="block mt-4 text-sm text-blue-500">Move to SignUp</Link>
    </div>
  )
}

export default Login