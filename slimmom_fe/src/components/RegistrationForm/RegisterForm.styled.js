import styled from 'styled-components';
import { FormButton } from '../DailyForm.styled';
import { FormStyled } from '../DailyForm.styled';
import { Form, Field } from 'formik';

export const StyleFormAuth = styled(FormStyled)`
 /* width:285px; */
 margin-right: auto;
 margin-left: auto;
 /* background-color: rebeccapurple; */
 margin-bottom: 20px;

 @media only screen and (min-width: 768px){
  display: flex;
  flex-direction: column;
  margin-left: 16px;
 }
 @media only screen and (min-width: 1280px){
  width:385px;

 }

`
export const ErrorMessageStyled = styled.span`
  display: block;
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom:20px;
  @media only screen and (min-width: 768px) {
    margin-bottom:32px;
  }

`

export const StyleRedirectButton = styled(FormButton)`
 background-color: white;
 border: 2px solid rgba(252, 132, 45, 1);
 color:rgba(252, 132, 45, 1);



  &:focus-visible,
  &:hover{
    background-color: rgba(252, 132, 45, 1);
    color: white;
    border: none;
    filter: none;
  }

`
export const  ButtonsContainerStyle = styled.div`
display:flex;
flex-direction: column;
@media only screen and (min-width: 768px){
  flex-direction: row;
  justify-content: flex-start;
  gap:32px;
  margin-left: 0;
  margin-top:0;
}

`