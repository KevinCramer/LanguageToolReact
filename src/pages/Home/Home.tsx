import './Home.scss'
import blackBar from '../../assets/blackBar.png';
import logoSvg from '../../assets/logoSvg.svg';
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
    <div>
      Welcome user with email: {currentUser && currentUser.email}
    </div>
    }
    <div className = "imageContent" >
      <img src ={logoSvg} width={163} height={163} alt="logo"/>
    </div>
    <div className = "content2">
      <h1>LINGO</h1>
      <div className = "imageContent">
        <img src ={blackBar} width={130} height={1} alt="logo"/>
      </div>
      <h4>COMMAND</h4>
      <div> 
        Learn foreign languages faster
      </div>
    </div>    
  </div> 
}

export default Home;