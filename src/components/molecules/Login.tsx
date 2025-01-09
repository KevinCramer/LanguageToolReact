import {
  displayForgotPassword,
  displaySignup,
  hideModal
} from '../../redux-store/auth';
import { useRef, useState } from 'react';
import CustomLink from '../atoms/CustomLink';
import { resetPermission } from '../../redux-store/lock';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //@ts-ignore
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      // @ts-ignore
      await login(emailRef.current.value, passwordRef.current.value);
      dispatch(hideModal());
      dispatch(resetPermission());
    } catch (error) {
      setError(`Failed to log in. The error is: ${error}`);
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6  shadow-lg w-full h-full flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-4 md:text-lg">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => dispatch(hideModal())}
              aria-label="Close">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.707 4.293a1 1 0 010 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586
                    12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293a1 1 0 011.414 0z"
                />
              </svg>
            </button>
          </div>
          <h4 className="text-2xl mb-4 text-center ">Welcome Back.</h4>
          <div className="mt-4 flex flex-row justify-center p-4">
            <div>New to LingoCommand? &nbsp;</div>
            <CustomLink onClick={() => dispatch(displaySignup())}>Create account</CustomLink>
          </div>
          {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
              Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                required
                className="mt-1 block w-full p-2 border
              border-gray-300 rounded-md shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
              Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                required
                className="mt-1 block w-full p-2 border
              border-gray-300 rounded-md shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2
            px-4 rounded hover:bg-blue-600 disabled:opacity-50"
            >
            Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <CustomLink onClick={() => dispatch(displayForgotPassword())}>
            Forgot Password?
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  
  );
}
