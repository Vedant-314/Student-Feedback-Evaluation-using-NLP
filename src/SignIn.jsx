// SignInForm.jsx
import React, { useState } from 'react';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Check if email belongs to nitj.ac.in domain
    if (email.endsWith('@nitj.ac.in')) {
      // Perform sign-in process
      setError('');
      console.log('Email domain verified. Signing in...');
    } else {
      setError('Email must belong to nitj.ac.in domain.');
    }
  };

  return (
    <div className="h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] overflow-y-auto">
      <div className="mx-auto font-poppins justify-center content-center rounded-xl shadow-lg flex flex-col lg:flex-row md:flex-row w-3/4 md:w-2/3 my-14">
        <div className="bg-denim items-center md:rounded-l-xl md:rounded-r-none rounded-t-xl shadow-lg justify-between p-5 md:p-10 md:w-1/2">
          <div className="w-32 md:w-44 h-16">
            <img src="/Image/logo.png" />
          </div>
          <div className="flex flex-col justify-center justify-items-center items-center">
            <div className="w-[75%] ">
              <img src="/Image/charts.png" />
            </div>
            <div className="items-center text-base md:text-lg text-center font-semibold text-french-gray">
            Unlock the power of feedback. Sign in to Feedify and discover a world of insights waiting just for you.
            </div>
          </div>
        </div>

        <div className="bg-snow flex flex-col justify-center items-center md:rounded-r-xl md:rounded-l-none rounded-b-xl shadow-lg md:w-[50%] p-[10%] md:p-[40px]">
          <div className="text-center mb-4">
            <p className="text-paynes-gray font-bold text-xl">
              Sign in to continue to your dashboard.
            </p>
          </div>
          <form 
            className='w-full'
            onSubmit={handleSignIn}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-rose-quartz font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full border border-rose-quartz rounded-full px-4 py-2 focus:outline-none focus:border-denim text-paynes-gray text-base" required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-rose-quartz font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full border border-rose-quartz rounded-full px-4 py-2 focus:outline-none focus:border-denim text-paynes-gray text-base" required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-denim text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
