import { displayUpdateProfile } from '../../redux-store/auth'
import { useDispatch, } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h4>Profile</h4>
      <div style={{ color: 'rgb(13, 110,253)', 
        textDecoration: 'underline', textAlign: 'center' }} 
      onClick={() => dispatch(displayUpdateProfile())}>
              Update Profile
      </div>
    </>
  );
}
 
export default Profile;
