import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/Context';

const Acount = () => {
  const navig = useNavigate();
  const { lognam, logpass, setLognam,setLogpass, log, mostakhdim} = useContext(Mycontext);

  const handleLogin = () => {
    const success = log(lognam, logpass);
    if (success) {
      navig('/'); 
    } else {
      alert("Email or password incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">New Customer</h2>
              <h3 className="text-lg text-gray-600 mb-4">Register Account</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                By creating an account you will be able to shop faster, be up to date 
                on an order's status, and keep track of the orders you have previously 
                made.
              </p>
            </div>
            
            <button 
              onClick={() => navig("/CreateAccount")}
              className="bg-gray-800 text-white px-8 py-3 rounded font-medium hover:bg-gray-700 transition-colors duration-200 uppercase tracking-wide"
            >
              CONTINUE
            </button>
          </div>

          <div className="bg-white border border-gray-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Returning Customer</h2>
              <p className="text-gray-600 mb-6">I am a returning customer</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Username
                </label>
                <input
                  type="text"
                  id="email"
                  value={lognam}
                  onChange={(e) => setLognam(e.target.value)}
                  placeholder="Email or Username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={logpass}
                  onChange={(e) => setLogpass(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="text-right">
                <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors bg-transparent border-none cursor-pointer">
                  Forgot your password?
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogin}
                  className="bg-gray-800 text-white px-8 py-3 rounded font-medium hover:bg-gray-700 transition-colors duration-200 uppercase tracking-wide"
                >
                  SIGN IN
                </button>
                <span className="text-gray-500">or</span>
                <button 
                  onClick={() => navig("/")}
                  className="text-gray-600 hover:text-gray-800 transition-colors bg-transparent border-none cursor-pointer"
                >
                  Return to Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acount;
