import { hideModal } from '../../redux-store/auth';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function DeleteAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // @ts-ignore
  const { deleteUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError('');

    promises.push(deleteUser());

    Promise.all(promises)
      .then(() => {
        dispatch(hideModal());
        navigate('/');
      })
      .catch((error) => {
        setError(`Failed to delete account. The error is: ${error}`);
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
              onClick={() => dispatch(hideModal())}
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
          <h4 className="text-2xl mb-4 text-center">Delete Account</h4>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:opacity-50"
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
