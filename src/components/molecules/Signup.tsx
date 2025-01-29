import { useRef, useState } from 'react';
import CloseIcon from '../atoms/CloseIcon';
import CustomLink from '../atoms/CustomLink';
import { RootStateRoute } from '../../redux-store/route';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { consistentStyles } from '../../constants';

export default function Signup() {
  const navigate = useNavigate();

  const forwardRoute = useSelector((state: RootStateRoute) => state.route.forwardRoute);
  const backwardRoute = useSelector((state: RootStateRoute) => state.route.backwardRoute);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    // @ts-ignore
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      // @ts-ignore
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate(forwardRoute || '/');
    } catch (error) {
      setError(`Failed to create an account. The error is: ${error}`);
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 shadow-lg w-full h-full flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => navigate(backwardRoute || '/')}
              aria-label="Close"
            >
              <CloseIcon/>
            </button>
          </div>
          <h4 className="text-2xl mb-4 text-center">Sign Up</h4>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password-confirm"
                className="block text-sm font-medium"
              >
                Password Confirmation
              </label>
              <input
                type="password"
                id="password-confirm"
                ref={passwordConfirmRef}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${consistentStyles.blueBackground} ${consistentStyles.textWhite} py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50`}
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 flex flex-row justify-center">
            <div>Already have an account?&nbsp;</div>
            <CustomLink onClick={() => navigate('/login')}>
              Log In
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
