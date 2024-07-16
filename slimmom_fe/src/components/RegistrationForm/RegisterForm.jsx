import { useState } from "react";
import { FormButton, InputStyled } from "../DailyForm.styled";
import { ButtonsContainerStyle, ErrorMessageStyled, StyleFormAuth, StyleRedirectButton } from "./RegisterForm.styled";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/operations';
import {RiseLoader } from 'react-spinners'



export const RegisterForm = () =>{

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
      name: '',
      email: '',
      password: '',

    };

    const onSubmit = (values, { resetForm }) => {
      const response = dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      console.log(response);
  
      if (response.error) {
        toast.error('Register failed. Please check your credentials.', {
          autoClose: 1200,
        });
      } else {
        console.log("Responseb arg:", response.arg);
        toast.success(`Welcome ${response.arg.name}!`, {
          autoClose: 1200,
        }); 

        // navigate('/');
        resetForm();
       
      }
    };

    const handleLoginClick = () => {
      navigate('/login');
    };

      const validationSchema = Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Must have min 6 characters')
        .max(12, 'Must have max 12 characters'),

    });
  
    
  return (
    <>
      <Formik 
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}
      >  
      {({
         values,
         isSubmitting
       }) => (
        <StyleFormAuth>
              
          <InputStyled 
            name ="name" 
            type="text"
            placeholder="Name *"
          />
          <ErrorMessageStyled >
          <ErrorMessage component="span" name="name"/>
          </ErrorMessageStyled>
          <InputStyled 
            name ="email" 
            type="email" 
            placeholder="Email *"
          />
           <ErrorMessageStyled >
             <ErrorMessage component="span" name="email"/>
           </ErrorMessageStyled>
          <InputStyled 
            name ="password" 
            type="password" 
            placeholder="Password *"
          />
            <ErrorMessageStyled >
             <ErrorMessage component="span" name="name"/>
            </ErrorMessageStyled>
          <ButtonsContainerStyle>
            <FormButton 
              type = "submit" 
              disabled={isSubmitting || loading}
            >
              {loading? <RiseLoader/>: 'Register'}
          
            </FormButton>

            <StyleRedirectButton onClick={handleLoginClick}>
             Log in
            </StyleRedirectButton>
          </ButtonsContainerStyle>

        </StyleFormAuth>
       )}
      </Formik>    
  
    </>
            
  )
}