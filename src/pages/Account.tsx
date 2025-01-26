import app from '../firebase';
import CustomLink from '../components/atoms/CustomLink';
import { getCheckoutUrl } from '../stripePayment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBackwardRoute } from '../redux-store/route';

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const getPremium = async () => {
    const priceId = import.meta.env.VITE_STRIPE_PRODUCT_PRICE_ID;
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.href = checkoutUrl;
  }

  return (
    <div className='flex flex-col justify-center flex-1 px-4'>
      <div className='max-w-screen-md mx-auto  md:text-lg rounded-md text-white text-center'>
        <h4 className='text-center text-2xl py-12'>Account Settings</h4>
        <CustomLink isWhite={true} onClick={() => {
          dispatch(setBackwardRoute(location.pathname));
          navigate('/reset-password')}
        }>
        Reset Password
        </CustomLink>
        <CustomLink isWhite={true} onClick={() => {
          dispatch(setBackwardRoute(location.pathname));
          navigate('/delete-account')}
        }>
        Delete Account
        </CustomLink>
      </div>
    </div>
  );
}
 
export default Account;
