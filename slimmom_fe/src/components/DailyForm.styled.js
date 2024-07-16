import styled from 'styled-components';
import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const FormStyled = styled(Form)`
  width:300px;
  margin-top: 34px;
  margin-left: 20px;
  margin-right: 60px;

  /* @media only screen and (min-width: 768px){
    display:flex;
    flex-direction: row;
 
    gap: 32px;
    margin-top:68px;
    width:704px;
  } */
`
export const FormContainer = styled.div`
@media only screen and (min-width: 768px){
    display:flex;
    flex-direction: row;
    /* flex-direction: column; */
    gap: 32px;
    margin-top:68px;
    width:704px;
  }
`

export const InputStyled = styled(Field)`
  width:250px;
  height:24px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  border-top: none;
  border-left:none;
  border-right: none;
  margin-bottom: 1px;
  /* margin-bottom: 32px; */
  &::placeholder{
    font-weight: 700;
    font-size: 14px;
    line-height: 17.01px;
    font-style: normal;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(155, 159, 170, 0.8);
  }
  &:focus-visible{
    border: none;
  }

`
export const LabelBlood  =  styled.label`
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
  color: rgba(155, 159, 170, 1);
  margin-bottom: 8.5px;
`
export const LabelRadio = styled.label`
  /* width:20px; */
  font-weight: 700;
  font-size: 14px;
  line-height: 17.01px;
  margin-right: 24px;
  color: ${({ selected }) => (selected ? 'rgba(252, 132, 45, 1)': 'rgba(155, 159, 170, 1)')}
  /* color: ${props => (props['data-ischecked'] ? 'rgba(252, 132, 45, 1)' : 'rgba(155, 159, 170, 1)')}; */
`
export const RadioButtons =  styled.div`
 display: flex;
 justify-content: center;
`
export const Radio = styled.div`
 display: flex;
 flex-direction: column;
 gap:10px;

@media only screen and (min-width: 768px) {
   gap:0;
  }
`

export const InputRadio = styled(Field)`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(224, 224, 224, 1); 
  border-radius: 50%;
  position: relative;
  outline: none;
  cursor: pointer;
  z-index: 50;

  &:checked {
    border-color: rgba(155, 159, 170, 1); 
  }

  &:checked::before {
    content: '';
    width: 10px; 
    height: 10px;
    background-color: rgba(252, 132, 45, 1);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const FirstColumn = styled.div`
  @media only screen and (min-width: 768px) {
   display: flex;
   flex-direction: column;
   /* flex-direction:row; */
  }

`
export const SecondColumn = styled.div`
  @media only screen and (min-width: 768px){
   display: flex;
   flex-direction: column;   
  }

`

export const FormButton =  styled.button.attrs(props => ({
  isHome: props.isHome
}))`
  width:210px;
  height: 43px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(252, 132, 45, 1);
  filter: drop-shadow(0 4px 10px rgba(252, 132, 45, 0.5));
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  border-radius:30px;
  cursor: pointer;
  &:focus-visible,
  &:hover{
   filter: none;
  }

  @media only screen and (min-width: 768px) {
   margin-left:0;
   margin-top:28px;
   margin-right:0;
  }

  @media only screen and (min-width: 1280px) {
    margin-right: ${props => props.isHome ? '57px': 0}

  /* margin-right: ${({isHome, isLogin, isRegister}) => 
    (isHome ? '57px' : '0')};//aici schimbare */
  }

`
export const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;

  @media only screen and (min-width: 1280px) {
   width: 608px;
   justify-content: end;
  }
`

export const StyledLine = styled.hr`
 display: none;
 @media only screen and (min-width: 768px){
    display: inline-block;
    width:250px;
    height:0.1px;
    margin: 0 0 10px 0;
    background-color:rgba(224, 224, 224, 0.5);
    /* color: rgba(224, 224, 224, 1); */
    /* color: red; */
    /* border: 1px solid red; */
  
  }

`