import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from './CloseIcon';

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
        //dispatch(hideModal());
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
              onClick={() => {}}
              aria-label="Close"
            >
              <CloseIcon/>
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
