import logo from '../../assets/slimLogo.png';
import { 
    // Line,
    LogoContainer, 
    StyledHeader, 
    StyledLogo, 
    StyledLogoText, 
    StyledLogoTextSpan, 
    StyledVector1 
} from './Header.styled';
import { NavBar } from '../NavBar/NavBar';
import vector1 from '../../assets/Vector 1.png';
import Mobilmeniu from '../../assets/Mobilmeniu.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserNavBar } from '../UserNavBar/UserNavBar';

export const Header = () =>{
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const isUserCalculation = location.pathname === '/user-calculation'
  return (
    <>
      <StyledHeader>
          <NavLink to="/">
             <LogoContainer >
               <StyledLogo src={logo} />
               <StyledLogoText >
                 Slim<StyledLogoTextSpan>Mom</StyledLogoTextSpan>
               </StyledLogoText>
              </LogoContainer>
          </NavLink>  
          <img src={Mobilmeniu}/>
          <StyledVector1 scr= {vector1}/>

        {isLoggedIn ? <UserNavBar/> : <NavBar/>}
          {/* <NavBar/> */}
          {/* <Line/> */}
      </StyledHeader>
    </>
  );
    

}    