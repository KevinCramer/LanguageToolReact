import './Home.scss'
import blackBar from '../../assets/blackBar.png';
import japaneseFlag from '../../assets/flag-icons/japanese-flag-icon.svg'
import logoSvg from '../../assets/logoSvg.svg';
import spanishFlag from '../../assets/flag-icons/spanish-flag-icon.svg'
import { toggleNavbar } from '../../redux-store/navbar';
import { useAuth } from '../../contexts/AuthContext'
import { useDispatch } from 'react-redux';

export const Home = () =>{
  const dispatch = useDispatch();
  // @ts-ignore
  const { currentUser } = useAuth();
  // outer div needed here for layout; don't use fragment 
  return <div onClick={() => dispatch(toggleNavbar())}> 
    {currentUser && currentUser.email && 
    <div style={{ textAlign: 'center' }}>
      Welcome user with email: {currentUser && currentUser.email}
    </div>
    }
    <div className = "imageContent" >
      <img src ={logoSvg} width={163} height={163} alt="LingoCommand Logo"/>
    </div>
    <div className = "content2">
      <h1>LINGO</h1>
      <div className = "imageContent">
        <img src ={blackBar} width={130} height={1} alt="black-line"/>
      </div>
      <h4>COMMAND</h4>
      <div> 
        I want to learn
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ margin:'30px' }} >
          <img src={spanishFlag} alt="Spanish flag"/>
          <div>
        Spanish
          </div> 
        </div>
        <div style={{ margin:'30px' }}>
          <img src={japaneseFlag} alt="Japanese flag"/>
          <div>
            Japanese
          </div>
        </div>
      </div>
    </div>    
  </div> 
}

export default Home;