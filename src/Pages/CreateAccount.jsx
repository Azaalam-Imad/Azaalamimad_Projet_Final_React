import React, { useContext } from 'react';
import { User } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/Context';

const CreateAccount = () => {
  const {
    email,
    nom,
    password,
    cpas,
    setEmail,
    setNom,
    setPassword,
    setCpas,
    sin
  } = useContext(Mycontext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = sin();
    if (success) {
      alert("Account created successfully!");
      navigate("/Acount"); 
    } else {
      alert("Check your inputs. Passwords must match and fields must be valid.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Create Account</h1>
          <h2 className="text-lg text-gray-700">Your Personal Details</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="firstName"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div>
            <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              value={cpas}
              onChange={(e) => setCpas(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 rounded font-medium hover:bg-gray-700 transition-colors duration-200 uppercase tracking-wide flex items-center space-x-2"
            >
              <User size={16} />
              <span>Create</span>
            </button>
            <span className="text-gray-500">or</span>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-800 transition-colors bg-transparent border-none cursor-pointer"
            >
              Return to Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
