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
    console.log('checkoutUrl: ', checkoutUrl)
    window.location.href = checkoutUrl;
    console.log('Upgrade to Premium');    
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
      <div style={{ height: '200px' }}>

      </div>
      <div style={{ color:'white', width:'100%', textAlign:'center' }} onClick={() => getPremium()}>
      [BETA] *** Upgrade to Premium ***
      </div>
    </>
  );
}
 
export default Profile;
