import { FormButton, InputStyled } from "../DailyForm.styled";
import { ButtonsContainerStyle, ErrorMessageStyled, StyleFormAuth, StyleRedirectButton } from "../RegistrationForm/RegisterForm.styled";
import { Formik, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations";
import { toast } from 'react-toastify';




export const LoginForm = () =>{
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const handleRegisterClick = () => {
      navigate('/register');
    };

    const initialValues = {
      email: '',
      password: '',

    };

    const onSubmit = (values, { resetForm }) => {
      const response = dispatch(
        logIn({
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
        console.log(response);
        toast.success(`Welcome ${response.arg.email}!`, {
          autoClose: 1200,
        }); 

        navigate('/user-calculation');
        resetForm();
       
      }
    };

    const validationSchema = Yup.object({
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
            onSubmit={onSubmit}>
           
            <StyleFormAuth>
              
                    <InputStyled 
                      name ="email" 
                      type="email" 
                      placeholder="Email *"/>

                      <ErrorMessageStyled >
                     <ErrorMessage component="span" name="email"/>
                       </ErrorMessageStyled>

                    <InputStyled 
                      name ="password" 
                      type="password" 
                      placeholder="Password *"/>

                    <ErrorMessageStyled >
                      <ErrorMessage component="span" name="email"/>
                    </ErrorMessageStyled>   

                
            <ButtonsContainerStyle>
               <FormButton type = "submit">Log in</FormButton>
               <StyleRedirectButton onClick={handleRegisterClick}>Register</StyleRedirectButton>
            </ButtonsContainerStyle>


            </StyleFormAuth>
            </Formik>
           
            </>
            
        )
}