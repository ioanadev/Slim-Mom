import { StyledLink, StyledNav } from "../NavBar/NavBarr.styled";
import { StyledRegisterLink, StyledRegisterNav } from "./UserNavBarr.styled";


export const UserNavBar = () =>{
   
    return(
      <>
         <StyledNav>
            <StyledLink to="/user-diary">diary</StyledLink>
            <StyledLink to="/user-calculation">calculator</StyledLink>
         </StyledNav>
      </>
    );
}