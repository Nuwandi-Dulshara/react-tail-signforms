// src/components/SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    alert('You have successfully signed up!');
    navigate('/signin');
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-black text-center" >Sign Up</h2>
        <form onSubmit={e => { e.preventDefault(); handleSignUp(); }}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-black">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-black">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2   font-bold text-white bg-black rounded hover:bg-gray-500 focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <a className="inline-block text-sm font-bold text-black align-baseline hover:text-gray-500" href="/signin">
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
