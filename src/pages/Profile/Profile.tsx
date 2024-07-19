import CustomLink from '../../components/atoms/CustomLink/CustomLink';
import { displayUpdateProfile } from '../../redux-store/auth'
import { useDispatch, } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h4>Profile</h4>
      <CustomLink onClick={() => dispatch(displayUpdateProfile())}>
        Reset Password
      </CustomLink>
    </>
  );
}
 
export default Profile;
