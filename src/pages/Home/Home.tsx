import './Home.scss'
import japaneseFlag from '../../assets/flag-icons/japanese-flag-icon.svg'
import lingoCommandLogo from '../../assets/lingoCommandLogo.svg';
import spanishFlag from '../../assets/flag-icons/spanish-flag-icon.svg'
import { toggleNavbar } from '../../redux-store/navbar';
import { useAuth } from '../../contexts/AuthContext'
import { useDispatch } from 'react-redux';

export const Home = () =>{
  const dispatch = useDispatch();
  // @ts-ignore
  const { currentUser } = useAuth();

  // Prevent toggleNavbar on flag clicks
  const handleFlagClick = (event: any) => {
    event.stopPropagation();
  };

  // outer div needed here for layout; don't use fragment 
  return <div onClick={() => dispatch(toggleNavbar())}> 
    {currentUser && currentUser.email && 
    <div style={{ textAlign: 'center' }}>
      Welcome user with email: {currentUser && currentUser.email}
    </div>
    }
    <div className="imageContent">
      <img src={lingoCommandLogo} width={220} height={220} alt="LingoCommand Logo"/>
    </div>
    <div className="content2">
      <div style={{ paddingTop: '10px', fontSize: '22px' }}> 
      Learn foreign languages faster     
      </div>
      <div style={{ display: 'flex', paddingTop: '0px' }}>
        <a href="/spanish" style={{ margin:'30px' }} onClick={handleFlagClick}>
          <img src={spanishFlag} style={{ width: '80px', height: '80px' }} alt="Spanish flag"/>
          <div>
            Spanish
          </div> 
        </a>
        <a href="/japanese" style={{ margin:'30px' }} onClick={handleFlagClick}>
          <img src={japaneseFlag} style ={{ width: '80px', height: '80px' }} alt="Japanese flag"/>
          <div>
            Japanese
          </div>
        </a>
      </div>
    </div>    
  </div> 
}

export default Home;