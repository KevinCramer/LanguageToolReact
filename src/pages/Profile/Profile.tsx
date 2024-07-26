import { displayDeleteAccount, displayUpdateProfile } from '../../redux-store/auth'
import CustomLink from '../../components/atoms/CustomLink/CustomLink';
import { useDispatch, } from 'react-redux';
import { getCheckoutUrl } from '../../stripePayment';
import app from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getPremium = async () => {
    const priceId = 'price_1PgT4NRraXayJTTJ54CIEfCQ';
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
      <CustomLink onClick={() => getPremium()}>
      Upgrade to Premium
      </CustomLink>
    </>
  );
}
 
export default Profile;
