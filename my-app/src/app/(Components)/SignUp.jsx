"use client"
import React, { useState } from 'react'
import { SIGNUP_USER } from '../lib/graphql';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const SignUp = () => {
     
    const router = useRouter()
    const [addUser, { loading, error }] = useMutation(SIGNUP_USER);
    const [newUser,setNewUser]= useState({
        username:"",
        email:"",
        password:""
    })

    if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

    const handleSignup = async () => {
        try {
          const { data } = await addUser({ variables: { user: newUser } });
          console.log('User added successfully:', data.addUser);
          const userId = data.addUser._id
        Cookies.set('userId', userId, { secure: true });
          router.push("/login")
        } catch (error) {
          console.error('Error adding user:', error);
        }
      };
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
    <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
        <input 
            type="text" 
            id="username" 
            className="mt-1 p-2 w-full border rounded-md" 
            placeholder="Enter Username"  
            value={newUser.username} 
            required
            onChange={(e) => setNewUser({...newUser, username: e.target.value})}
        />
    </div>
    <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <input 
            type="email" 
            id="email" 
            className="mt-1 p-2 w-full border rounded-md" 
            placeholder="Enter Email"  
            value={newUser.email} 
            required
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
        />
    </div>
    <div className="mb-4">
        <label htmlFor="password-field" className="block text-sm font-medium text-gray-600">Password</label>
        <input 
            type="password" 
            id="password-field" 
            className="mt-1 p-2 w-full border rounded-md" 
            placeholder="Enter Password"  
            value={newUser.password} 
            required
            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
        />
    </div>
    <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleSignup}
       
    >
      Submit
    </button>
    <Link href="/login" className="block mt-4 text-sm text-blue-500">Move to Login</Link>
</div>
  )
}

export default SignUp