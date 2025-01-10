import { useDispatch } from 'react-redux';
import { resetPermission } from '../../redux-store/lock';
import CustomLink from './CustomLink';
import { displayLogin } from '../../redux-store/auth';

export default function PremiumContent() {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 shadow-lg w-full h-full max-w-full flex items-center justify-center rounded-lg z-60">
        <div className="px-4 md:text-lg w-full">
          <div className="flex justify-end pb-2">
            <button
              onClick={() => dispatch(resetPermission())} // Close the modal without navigating to login page
              aria-label="Close"
              className="text-gray-600 hover:text-gray-800"
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

          <h2 className="text-2xl font-semibold text-center mb-4">Premium Content</h2>
          <div className="text-center text-gray-700 mb-6">
            Please{' '}
            <CustomLink
              inline={true}
              onClick={() => {
                dispatch(displayLogin() ); // Close modal on "log in" click
                dispatch(resetPermission());
              }} >
              log in
            </CustomLink>{' '}
            to access this content.
          </div>

          {/* Conditional Content Based on Authentication */}
          <div className="text-center mt-6">
            {/* Add any additional premium content description or image here */}
            <p className="text-gray-500">Unlock exclusive content by logging in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
