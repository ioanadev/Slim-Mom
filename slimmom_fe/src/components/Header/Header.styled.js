import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 40%; */
  gap: 10%;
  margin-bottom: 16px;

 @media only screen and (min-width: 1280px){
   width: 40%;
   align-items: end ;
   justify-content: start;
   gap:20px;
   margin-top: 80px
}
`
export const LogoContainer = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
  margin-right: 140px;
  }
`


export const StyledLogo = styled.img`
  position: relative;
`

export const StyledLogoText = styled.h1`
  position: absolute;
  margin: 0;
  z-index: 2;
  appearance: none;
  top: 35px;
  left: 60px;
  font-weight: 50;
  color: rgba(33, 33, 33,1);
  display:none;

  @media only screen and (min-width: 768px) {
  display: inline-block;
  }
`
export const StyledLogoTextSpan = styled.span`
  color:rgba(252, 132, 45, 1);
`


export const StyledVector1 = styled.div`
display: none;
  @media only screen and (min-width: 1280px){
    display: inline;
    height: 32px;
    width: 2px;
 
    /* color: red; */
    background-color: rgba(224, 224, 224, 1);
 }
`
export const Line = styled.hr`
height: 2px;
background-color:rgba(224, 224, 224, 1);
color: rgba(224, 224, 224, 1);

@media only screen and (min-width: 1280px){
    display: inline-block;
  }
`

