import { displayLogin, displaySignup } from '../../redux-store/auth';
import { useRef, useState } from 'react';
import CustomLink from '../atoms/CustomLink';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      // @ts-ignore
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch (error) {
      setError(`Failed to reset password. The error is: ${error}`);
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 shadow-lg w-full h-full flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-4 md:text-lg">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => dispatch(displayLogin())}
              aria-label="Close"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.707 4.293a1 1 0 010 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293a1 1 0 011.414 0z"
                />
              </svg>
            </button>
          </div>
          <h4 className="text-2xl mb-4 text-center">Password Reset</h4>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
              {message}
            </div>
          )}
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-4 text-center">
            <CustomLink onClick={() => dispatch(displayLogin())}>
              Log In
            </CustomLink>
          </div>
          <div className="mt-4 flex flex-row justify-center">
            <div>Need an account?&nbsp;</div>
            <CustomLink onClick={() => dispatch(displaySignup())}>
              Sign Up
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
