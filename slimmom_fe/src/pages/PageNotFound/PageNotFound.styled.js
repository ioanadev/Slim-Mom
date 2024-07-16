import styled from "styled-components";
import { StyledLink } from "../../components/NavBar/NavBarr.styled";

export const Headings = styled.h1`
display:flex;
font-size:20px;
justify-content: center;
margin-top: 60px;
margin-bottom:30px;
color: rgba(155, 159, 180, 1);
@media only screen and (min-width: 768px){
   font-size:35px;
  }
`
export const RedirectParagraf = styled.div`
display:flex;
justify-content: center;
align-items: center;

`
export const RedirectLink = styled(StyledLink)`
padding-left:5px;
`