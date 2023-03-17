import React, { useRef } from 'react';
// APOLLO GRAPHQL
import { LOGIN } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
// UTILS
import localStorageService from '../utils/localStorageService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const form = useRef(null);

  // GRAPHQL FUNCTIONS
  const [userLogin] = useMutation(LOGIN, {
    onCompleted: (data) => {
      console.log(data);
      localStorageService.setItem('jwt_token', data.USER_login.token);
      navigate('/');
    },
    onError: (e) => {
      console.log(e);
    },
  });

  // FUNCTIONS
  const handleSubmit = () => {
    if (form.current !== null) {
      const formData = new FormData(form.current);
      const user = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      userLogin({
        variables: {
          login: user,
        },
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" ref={form}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="group relative w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div>
          <h1 className="font-bold">Accounts</h1>
          <p>jeff@gmail.com - hellobaby</p>
          <p>mark@gmail.com - hellobaby</p>
          <p>elon@gmail.com - hellobaby</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
