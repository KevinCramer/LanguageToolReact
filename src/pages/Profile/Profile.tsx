import { displayDeleteAccount, displayUpdateProfile } from '../../redux-store/auth'
import CustomLink from '../../components/atoms/CustomLink/CustomLink';
import { useDispatch, } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
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
