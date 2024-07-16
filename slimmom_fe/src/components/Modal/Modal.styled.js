import styled from 'styled-components';
import backButton from '../../assets/BackButton.png'

export const ModalBackground = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: rgba(33, 33, 33, 0.12);
 background-image: url(${backButton});
 background-repeat: no-repeat;
 background-position-x: 10px;
 background-position-y: 20px;
 position: fixed;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 1200;
 opacity: 1;
 top:9%;
 left:0;
 @media only screen and (min-width: 768px){
   top:0;
   background-image:none;
  }
`
export const ModalContainer = styled.div`
width: 100vw;
/* height: 574px; */
/* border-radius:12px; */
background-color: white;
/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
display:flex;
flex-direction:column;
padding:25px;
height:80vh;
/* margin-top: 150px; */


 @media only screen and (min-width: 768px){
 width:572px;
 height:472px;
 }

 @media only screen and (min-width: 1280px){
  width: 672px;
  height: 574px;
 }

`
export const ModalContainerButton = styled.div`
display: flex;
justify-content: end;
margin-bottom: 20px;
`

export const ModalCloseButton = styled.button`
 display:none;
 @media only screen and (min-width: 768px){
 display:inline-block;
 width:20px;
 height: 20px;
 background-color: white;
 border: none;
 font-size:26px;
 font-weight: 400;
 }

`
// export const CloseButton = styled.spam`

// `
export const ModalCalorieContainer = styled.div`
display: flex;
justify-content: center;
align-items: baseline;
/* background-color: royalblue; */
margin-top:20px;
margin-bottom:15px;
 @media only screen and (min-width: 768px){
  margin-bottom:32px;
 }

`

export const ModalCalorieNumber = styled.span`
font-size: 48px;
font-weight: 700;
line-height: 58px;
margin-right: 5px;
color: rgba(38, 64, 97, 1);
/* display: flex;
justify-content: center; */
/* margin-top:20px;
margin-bottom:32px */


`
export const ModalCalorieParagraf = styled.p`
font-size: 26px;
font-weight: 700;
line-height: 31px;
margin-right: 5px;
color: rgba(38, 64, 97, 1);
`

export const ModalParagraf = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 17px;
display: flex;
justify-content: center;

`
export const Button = styled.div`
display: flex;
justify-content: center;
`
export const Container = styled.div`
display: flex;
justify-content:center;
margin-top:20px;
@media only screen and (min-width: 768px){
   margin-top:10px;
  }
` 
export const ProductsContainer = styled.div`
display: flex;
justify-content:center;
/* align-items: center; */
/* background-color:royalblue; */
width: 290px;
height: 100px;
overflow-y:auto;
  @media only screen and (min-width: 768px){
   width:322px;
   height:100px;
  }

 `
export const OrderedList = styled.ol`

/* background-color: beige; */
/* overflow-y:auto; */
padding: 1px;
`
export const ListItem = styled.li`
/* list-style-type: decimal;
padding-left:20px; */
counter-increment: list-counter; /* Increment the counter */
  position: relative; /* Enable positioning for the pseudo-element */
  padding-left: 30px; 
  color: rgba(155, 159, 170, 1);
  padding-bottom: 2px;
  margin-left: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  &::before{
    content: counter(list-counter) ". "; /* Display the counter */
    position: absolute; /* Position it absolutely */
    left: 0; 
  }
`
export const SearchModalContainer = styled.div`
width: 20vw;
height:100px;

/* background-color: white; */
background-color:red;
/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
display:flex;
flex-direction:column;
padding:25px;




 /* @media only screen and (min-width: 768px){
 width:572px;
 height:472px;
 }

 @media only screen and (min-width: 1280px){
  width: 672px;
  height: 574px;
 } */
`
export const SearchModalBackground = styled.div`
 width: 100vw;
 height: 100vh;
 /* background-color: rgba(33, 33, 33, 0.12);
 background-image: url(${backButton});
 background-repeat: no-repeat;
 background-position-x: 10px;
 background-position-y: 20px; */
 /* position: fixed;
 display: flex;
 justify-content: center;
 align-items: center; */
 /* z-index: 1200;
 opacity: 1; */
 /* top:9%;
 left:0; */
 background-color:ghostwhite;
 @media only screen and (min-width: 768px){
   top:0;
   background-image:none;
  }
`