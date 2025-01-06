import { displayDeleteAccount, displayUpdateAccount } from '../redux-store/auth'
import app from '../firebase';
import CustomLink from '../components/atoms/CustomLink';
import { getCheckoutUrl } from '../stripePayment';
import { useDispatch, } from 'react-redux';

const Account = () => {
  const dispatch = useDispatch();
  const getPremium = async () => {
    const priceId = import.meta.env.VITE_STRIPE_PRODUCT_PRICE_ID;
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.href = checkoutUrl;
  }

  return (
    <>
      <div>

      </div>
      <h4>Account Settings</h4>
      <CustomLink isWhite={true} onClick={() => dispatch(displayUpdateAccount())}>
        Reset Password
      </CustomLink>
      <CustomLink isWhite={true} onClick={() => dispatch(displayDeleteAccount())}>
        Delete Account
      </CustomLink>
    </>
  );
}
 
export default Account;
