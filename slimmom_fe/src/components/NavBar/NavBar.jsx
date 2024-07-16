import { StyledLink, StyledNav } from "./NavBarr.styled";


export const NavBar = () =>{
    return(
      <>
         <StyledNav>
            <StyledLink to="/login">log in</StyledLink>
            <StyledLink to="/register">registration</StyledLink>
         </StyledNav>
      </>
    );
}