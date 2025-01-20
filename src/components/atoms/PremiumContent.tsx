import { useDispatch } from 'react-redux';
import { resetPermission } from '../../redux-store/lock';
import CustomLink from './CustomLink';
import { displayLogin } from '../../redux-store/auth';
import CloseIcon from './CloseIcon';

export default function PremiumContent() {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 shadow-lg w-full h-full max-w-full flex items-center justify-center rounded-lg z-60">
        <div className="max-w-[375px] mx-auto px-8 md:text-lg w-full">
          {/* Close Button Positioning */}
          <div className="flex justify-end pb-2">
            <button
              onClick={() => dispatch(resetPermission())} // Close the modal without navigating to login page
              aria-label="Close"
              className="text-gray-600 hover:text-gray-800"
            >
              <CloseIcon/>
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-4">Premium Content</h2>
          <div className="flex text-center text-gray-700 mb-6">
            <div>
            To access this content please &nbsp;
            </div>
            <CustomLink
              inline={true}
              onClick={() => {
                dispatch(displayLogin()); // Close modal on "log in" click
                dispatch(resetPermission());
              }}
            >
              log in
            </CustomLink>.
          </div>

          {/* Conditional Content Based on Authentication */}
          <div className="text-center mt-6">
            {/* Add any additional premium content description or image here */}
          </div>
        </div>
      </div>
    </div>
  );
}
