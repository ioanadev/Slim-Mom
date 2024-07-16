import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

export const InputSearchModal = ({products}) =>{

//   const dispatch = useDispatch();
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

  console.log("Products", products);

    return(
        
        <>
          <div onClick={e => handleBackdropClick(e)}>
           <div>
                <h1>Modal input search</h1>
            {products ? <ul>{products.title.map((product, index)=>(
             <li key= {index}>{product}</li>
            ))}</ul> : "no matches found" }

          </div>
       

          </div>

            {/* <ModalBackground onClick={e => handleBackdropClick(e)}>
               <ModalContainer>


              </ModalContainer>

            </ModalBackground> */}
         
        </>

    )

}
