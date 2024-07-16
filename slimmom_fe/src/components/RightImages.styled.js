import styled, { css } from 'styled-components';

export const VectorStyled = styled.img`
  display: none;


  @media only screen and (min-width: 768px){
      display: inline-block;
      /* visibility: visible; */
      position: absolute;
      width: 553px;
      height:auto;
      z-index: 2;
      right: -20px;
      top: 390px;
      pointer-events: none;
    }

  @media only screen and (min-width: 1280px){
      display: none;
    }
`
export const VectorDskStyled = styled.img`
  display: none;
  /* visibility: hidden; */

  @media only screen and (min-width: 1280px) {
      display: inline-block;
      /* visibility: visible;  */
      position: absolute;
      /* background-color: blueviolet; */
      width: 602px;
      height:auto;
      z-index: 2;
      right: -20px;
      top:34px;
      pointer-events: none;
    }
`

export const BananaStyled= styled.img`
  /* visibility: hidden; */
  display: none;

  @media only screen and (min-width: 768px){
      display:inline;
      /* visibility: visible; */
      position: absolute;
      z-index: 4;
      right: -20px;
      top: 560px;
      /* border: 2px solid red; */
      pointer-events: none;
    }

  @media only screen and (min-width: 1280px) {
      top:5px;
    }
`
export const LevesStyled= styled.img`
  display: none;
  /* visibility: hidden; */
  transition: transform 0.5s ease;

  @media only screen and (min-width: 768px) {
    display: inline;
    pointer-events: none;
    position: absolute;
    width: 740px;
    height: auto;
    transform: rotate(0deg);
    z-index: 6;
    left: 65px;
    top: -85px;

    ${props =>
      props.isHome &&
      css`
        width: 531px;
        transform: rotate(90deg);
        left: 75px;
        top: 390px;
      `}
  }
  @media only screen and (min-width: 1280px) {
     transform: none;
     width: 746px;
     top: -26px;
     /* right: 193px; */
     left: 345px;
     z-index: 12;
    }
`


export const StrawberryStyled= styled.img`
   display: none;
   /* visibility: hidden; */
   transition: transform 0.5s ease;

   @media only screen and (min-width: 768px){
     display: inline;
     /* visibility: visible; */
     position: absolute;
     width: 300px;
     height: auto;
     z-index: 8;
     right: 5px;
     top: 450px; 
     pointer-events: none;
    }

  @media only screen and (min-width: 1280px) {
     top: 465px;
     right: 36px;
    }
`
