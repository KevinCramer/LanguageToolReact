import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import CloseIcon from './CloseIcon';

export default function UpdateAccount() {
  const dispatch = useDispatch();
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  // @ts-ignore
  const { updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    
    if (!passwordRef.current || !passwordConfirmRef.current) {
      return setError('Password fields are not filled in');
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    if (passwordRef.current.value.length < 8) {
      return setError('Password should be at least 8 characters long');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (passwordRef.current.value) {
      // @ts-ignore
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        //dispatch(hideModal());
      })
      .catch((error) => {
        setError(`Failed to update account. The error is: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 shadow-lg w-full h-full flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-4 md:text-lg">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => {}}
              aria-label="Close"
            >
              <CloseIcon/>
            </button>
          </div>
          <h4 className="text-2xl mb-4 text-center">Reset Password</h4>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                New Password
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
              <label htmlFor="password-confirm" className="block text-sm font-medium">
                Confirm New Password
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
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
