import { useDispatch } from 'react-redux';
import { resetPermission } from '../../redux-store/lock';
import CustomLink from './CustomLink';
import CloseIcon from './CloseIcon';
import { useNavigate } from 'react-router-dom';

export default function FreeContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 shadow-lg w-full h-full max-w-full flex items-center justify-center rounded-lg z-60">
        <div className="max-w-[375px] mx-auto px-8 md:text-lg w-full">
          {/* Close Button Positioning */}
          <div className="flex justify-end pb-2">
            <button
              onClick={() => navigate(-1)} //
              aria-label="Close"
              className="text-gray-600 hover:text-gray-800"
            >
              <CloseIcon/>
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-4">Free Content</h2>
          <div className="flex text-center text-gray-700 mb-6">
            <div>
            To access this content please&nbsp;
            </div>
            <CustomLink
              inline={true}
              onClick={() => {
                navigate('/login');
                dispatch(resetPermission());
              }}
            >
              log in
            </CustomLink>.
          </div>
        </div>
      </div>
    </div>
  );
}
