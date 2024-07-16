import styled from "styled-components";
import { FormButton, InputStyled } from "../DailyForm.styled";

export const FormContainer = styled.div`
gap:10px;
`
export const InputNumber = styled(InputStyled)`
width:50px;
`
export const AddButton = styled(FormButton)`
width: 40px;
height: 40px;
margin-top: 0;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
font-size:28px;
margin-bottom: 5px;
padding: 5px 10px 10px 10px;

`