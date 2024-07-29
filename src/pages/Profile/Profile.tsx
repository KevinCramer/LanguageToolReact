import { displayDeleteAccount, displayUpdateProfile } from '../../redux-store/auth'
import app from '../../firebase';
import CustomLink from '../../components/atoms/CustomLink/CustomLink';
import { getCheckoutUrl } from '../../stripePayment';
import { useDispatch, } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const getPremium = async () => {
    const priceId = import.meta.env.VITE_STRIPE_PRODUCT_PRICE_ID;
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.href = checkoutUrl;
  }

  return (
    <>
      <h4>Profile</h4>
      <CustomLink onClick={() => dispatch(displayUpdateProfile())}>
        Reset Password
      </CustomLink>
      <CustomLink onClick={() => dispatch(displayDeleteAccount())}>
        Delete Account
      </CustomLink>
    </>
  );
}
 
export default Profile;
