import { useRef, useState } from 'react';
import CloseIcon from '../../components/atoms/CloseIcon';
import CustomLink from '../../components/atoms/CustomLink';
import { RootStateRoute } from '../../redux-store/route';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { consistentStyles } from '../../constants';

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //@ts-ignore
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const forwardRoute = useSelector((state: RootStateRoute) => state.route.forwardRoute);
  const backwardRoute = useSelector((state: RootStateRoute) => state.route.backwardRoute);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      // @ts-ignore
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(forwardRoute || '/');
    } catch (error) {
      setError(`Failed to log in. The error is: ${error}`);
    }

    setLoading(false);
  }

  return (
    <div className={`${consistentStyles.textBlack} fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`}>
      <div className="relative bg-white p-6  shadow-lg w-full h-full flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => navigate(backwardRoute || '/')}
              aria-label="Close">
              <CloseIcon/>
            </button>
          </div>
          <h4 className="text-2xl mb-4 text-center ">Welcome Back.</h4>
          <div className="mt-4 flex flex-row justify-center p-4">
            <div>New to LingoCommand? &nbsp;</div>
            <CustomLink onClick={() => navigate('/signup')}>Sign Up</CustomLink>
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
              className={`w-full ${consistentStyles.blueBackground} ${consistentStyles.textWhite} py-2 
              px-4 rounded hover:bg-blue-600 disabled:opacity-50`}
            >
            Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <CustomLink onClick={() => navigate('/reset-password')}>
            Forgot Password?
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  
  );
}
