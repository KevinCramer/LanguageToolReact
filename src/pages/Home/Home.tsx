import './Home.scss'
import blackBar from '../../assets/blackBar.png';
import logoSvg from '../../assets/logoSvg.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../../pizzaSlice';

export const Home = () =>{
  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch();
  return <div> {/*  outer div needed here for layout; don't use fragment */}
    <div className = "imageContent" >
      <img src ={logoSvg} width={163} height={163} alt="logo"/>
    </div>
    <div className = "content2">
      <h1>LINGO</h1>
      <div className = "imageContent">
        <img src ={blackBar} width={130} height={1} alt="logo"/>
      </div>
      <h4>COMMAND</h4>
      <button onClick={() => dispatch(toggleNavbar())}> 
        Learn foreign languages faster
      </button>
    </div>    
  </div> 
}

export default Home;