 import styled from 'styled-components';
 import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
position:relative;
/* display: inline-block; */
unicode-bidi: normal;
/* width:200px; */
`



 export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height:17px;
  color: rgba(155, 159, 170, 1);
  margin-right: 14px;
  text-decoration: none;
  cursor: pointer;
   &:last-child{
    margin-right:0;
   }
   &:active,
   &:hover{
     color:rgba(33, 33, 33, 1);
   }
 
 `


