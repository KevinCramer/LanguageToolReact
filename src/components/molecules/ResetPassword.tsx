import { useRef, useState } from 'react';
import CloseIcon from '../atoms/CloseIcon';
import { RootStateRoute } from '../../redux-store/route';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { consistentStyles } from '../../constants';

export default function ResetPassWord() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const backwardRoute = useSelector((state: RootStateRoute) => state.route.backwardRoute);

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
        <div className="max-w-screen-md mx-auto px-4">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => navigate(backwardRoute || '/')}
              aria-label="Close"
            >
              <CloseIcon/>
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
              className={`w-full ${consistentStyles.blueBackground} text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50`}
            >
              Send email to reset password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
