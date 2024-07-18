import { Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfile from '../../components/atoms/UpdateProfile/UpdateProfile';
import { displayUpdateProfile, hideModal, loginModalStates, RootState } from '../../redux-store/login'

const Profile = () => {
  const reduxLogin = useSelector((state: RootState) => state.login);
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
