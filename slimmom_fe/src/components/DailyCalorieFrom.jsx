// import { Line } from "../pages/HomePage.style";
import { 
  ErrorMessage, 
  Formik
} from "formik";
import { 
  ButtonContainer, 
  FirstColumn, 
  FormButton, 
  FormContainer, 
  FormStyled, 
  InputStyled, 
  LabelBlood,  
  Radio, 
  RadioButtons,
  SecondColumn,
  StyledLine
} from "./DailyForm.styled";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { Modal } from "./Modal/Modal";
import useModal from "./Modal/useModal";
import { ModalTitle } from "./Title/Title";
import { 
  Button, 
  Container, 
  ListItem, 
  ModalCalorieContainer, 
  ModalCalorieNumber, 
  ModalCalorieParagraf, 
  ModalParagraf, 
  OrderedList, 
  ProductsContainer,
} from "./Modal/Modal.styled";
import { toast } from 'react-toastify';
import {PacmanLoader} from 'react-spinners';
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessageStyled } from "./RegistrationForm/RegisterForm.styled";
import { RadioButton } from "./RadioButton/RadioButton";
import { postDiary, userPostDiary } from "../redux/operations";
import { selectDiary, selectIsLoading, selectIsLoggedIn } from "../redux/selectors";


  

export const DairyCalorieForm = () =>{

// const [selectedValue, setSelectedValue] = useState('');
const { open, close, isOpen } = useModal();
const dispatch = useDispatch();
const data = useSelector(selectDiary);
const isLoggedIn = useSelector(selectIsLoggedIn);
const isLoading = useSelector(selectIsLoading);

const navigate = useNavigate();
  
const location = useLocation();
const isHome = location.pathname === '/';

const initialValues = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: '',
 };

const onSubmit =  async (values, { resetForm }) => {
  try {
    if (isLoggedIn) {
      const res = await dispatch(userPostDiary(values)).unwrap();
      console.log(res);
    } else {
      const res = await dispatch(postDiary(values)).unwrap();
      console.log(res);
    }
    open(true);
    resetForm();
  } catch (error) {
    console.error('Failed to submit form:', error);
  }
  
};

const validationSchema = Yup.object({

  height: Yup
    .number()
    .positive()
    .required('Height is required'),
  age: Yup
    .number()
    .positive()
    .required('Age is required'),
  currentWeight: Yup
    .number()
    .positive()
    .required('Current weight is required'),
  desiredWeight: Yup
    .number()
    .positive()
    .required('Desired weight is required'),
  bloodType: Yup
    .number()
    .positive()
    .required('Blood type is required'),    

});


const handleModalClick = () =>{
  {isLoggedIn ? navigate('/user-diary') : navigate('/register')}

//  dispatch(resetDiaryState());
}

// const handleRadioChange = (event) => {
//     setSelectedValue(event.target.value);
// };



    return (
        <>
        {isLoading ? <PacmanLoader  color="#fd7307"
  speedMultiplier={0} />:  <Formik  
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}>
        <FormStyled>
            <FormContainer>

            <FirstColumn>
                <InputStyled 
                name ="height" 
                type="number" 
                placeholder="Height *"/>

              <ErrorMessageStyled >
               <ErrorMessage component="span" name="height"/>
              </ErrorMessageStyled>

                <InputStyled 
                name ="age" 
                type="number" 
                placeholder="Age *"/>

              
               <ErrorMessageStyled >
                 <ErrorMessage component="span" name="age"/>
               </ErrorMessageStyled>

                <InputStyled 
                name ="currentWeight" 
                type="number" 
                placeholder="Current weight *"/>

               <ErrorMessageStyled >
                 <ErrorMessage component="span" name="currentWeight"/>
               </ErrorMessageStyled>

            </FirstColumn>

            <SecondColumn>
                <InputStyled 
                name ="desiredWeight" 
                type="number" 
                placeholder="Desired weight *"/>
              
               <ErrorMessageStyled >
                 <ErrorMessage component="span" name="desiredWeight"/>
               </ErrorMessageStyled>

                <Radio>
                  <LabelBlood> Blood type *</LabelBlood>
                  <StyledLine/>
                   
                    <RadioButtons>
                     <RadioButton name="bloodType" value="1" label="1" />
                     <RadioButton name="bloodType" value="2" label="2" />
                     <RadioButton name="bloodType" value="3" label="3" />
                     <RadioButton name="bloodType" value="4" label="4" />
                    
                    </RadioButtons>
                </Radio>
           </SecondColumn>

           </FormContainer>
            <ButtonContainer>
               <FormButton 
               type = "submit"
               isHome = {isHome} 
              //  isLogin = {isLogin} 
              //  isRegister = {isRegister}
               onClick={()=>{open(true)}}
               >Start losing weight</FormButton>
            </ButtonContainer>

        </FormStyled>
       </Formik>}
       {/* <Formik  
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}>
        <FormStyled>
            <FormContainer>

            <FirstColumn>
                <InputStyled 
                name ="height" 
                type="number" 
                placeholder="Height *"/>

              <ErrorMessageStyled >
               <ErrorMessage component="span" name="height"/>
              </ErrorMessageStyled>

                <InputStyled 
                name ="age" 
                type="number" 
                placeholder="Age *"/>

              
               <ErrorMessageStyled >
                 <ErrorMessage component="span" name="age"/>
               </ErrorMessageStyled>

                <InputStyled 
                name ="currentWeight" 
                type="number" 
                placeholder="Current weight *"/>

               <ErrorMessageStyled >
                 <ErrorMessage component="span" name="currentWeight"/>
               </ErrorMessageStyled>

            </FirstColumn>

            <SecondColumn>
                <InputStyled 
                name ="desiredWeight" 
                type="number" 
                placeholder="Desired weight *"/>
              
               <ErrorMessageStyled >
                 <ErrorMessage component="span" name="desiredWeight"/>
               </ErrorMessageStyled>

                <Radio>
                  <LabelBlood> Blood type *</LabelBlood>
                  <StyledLine/>
                   
                    <RadioButtons>
                     <RadioButton name="bloodType" value="1" label="1" />
                     <RadioButton name="bloodType" value="2" label="2" />
                     <RadioButton name="bloodType" value="3" label="3" />
                     <RadioButton name="bloodType" value="4" label="4" />
                    
                    </RadioButtons>
                </Radio>
           </SecondColumn>

           </FormContainer>
            <ButtonContainer>
               <FormButton 
               type = "submit"
               isHome = {isHome} 
              //  isLogin = {isLogin} 
              //  isRegister = {isRegister}
               onClick={()=>{open(true)}}
               >Start losing weight</FormButton>
            </ButtonContainer>

        </FormStyled>
       </Formik> */}

        {isOpen && data &&
          <Modal close={close}>
            <ModalTitle title = 'Your recommended daily calorie intake is:'/>
              <ModalCalorieContainer >

                <ModalCalorieNumber>
                 {data.daily_calories}
                </ModalCalorieNumber> 

                 <ModalCalorieParagraf>
                   Kcal
                 </ModalCalorieParagraf >

              </ModalCalorieContainer>

              <ModalParagraf>
                Foods you should not eat
              </ModalParagraf>
            <Container>
              <ProductsContainer>
                
                <OrderedList>
                 {data.non_recommended_products.map((product, index) =>(
                    <ListItem key = {index}>
                      {product}
                    </ListItem>
                  ))}
               </OrderedList>
             </ProductsContainer>
            </Container> 
              <Button>
                <FormButton onClick={handleModalClick}>
                  Start losing weight
                </FormButton> 
              </Button>  
          </Modal>
        }
      </>
        
    )
}
