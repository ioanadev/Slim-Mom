import { useEffect } from "react"
import { FormButton } from "../DailyForm.styled"
import { ModalTitle } from "../Title/Title"
import { 
    ModalBackground, 
    ModalCloseButton, 
    ModalContainer, 
    ModalContainerButton, 
    ModalParagraf, 
    SearchModalBackground, 
    SearchModalContainer
} from "./Modal.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectIsLoggedIn } from "../../redux/selectors";
import { useLocation } from "react-router-dom";
import {PacmanLoader} from 'react-spinners';

export const Modal = ({close, children}) =>{

  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const isUserDiary = location.pathname ==='/user-diary';

  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
   

  useEffect(()=>{
   const handleKeyDown = e =>{
      if(e.key === 'Escape'){
        // dispatch(resetDiaryState()); 
        close();
      }
   };
   document.addEventListener('keydown', handleKeyDown);
   return ()=>{
    document.removeEventListener('keydown', handleKeyDown);
   };
  },[close]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
    //  {!isLoggedIn && dispatch(resetDiaryState());} 
      close();
    }
  };

  const closeClick = e => {
    if (e.target.name === 'cancel' || e.currentTarget.name === 'closeBtn') {
      // {!isLoggedIn && dispatch(resetDiaryState());} 
      close();
    }
  };

  

    return(
        
        <>
          {isLoading && <PacmanLoader  color="#fd7307"
  speedMultiplier={0} />}
         {isUserDiary ?  
         <SearchModalBackground onClick={e => handleBackdropClick(e)}>
         <SearchModalContainer>
          {children}
          </SearchModalContainer>  
          </SearchModalBackground>
          :

         <ModalBackground onClick={e => handleBackdropClick(e)}>
               <ModalContainer>
                   <ModalContainerButton>
                      <ModalCloseButton 
                         name="closeBtn" 
                         onClick={closeClick}> x
                       </ModalCloseButton>
                   </ModalContainerButton>

                 {children}

              </ModalContainer>

            </ModalBackground> }
            {/* <ModalBackground onClick={e => handleBackdropClick(e)}>
               <ModalContainer>
                   <ModalContainerButton>
                      <ModalCloseButton 
                         name="closeBtn" 
                         onClick={closeClick}> x
                       </ModalCloseButton>
                   </ModalContainerButton>

                 {children}

              </ModalContainer>

            </ModalBackground> */}
         
        </>

    )

}
Modal.propTypes = {
    // children: PropTypes.node,
    close: PropTypes.func,
  };