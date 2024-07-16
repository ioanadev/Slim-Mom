
import { FormButton, FormContainer, InputStyled } from "../DailyForm.styled";
import { ErrorMessage, Form, Formik } from "formik";
import { AddButton, InputNumber } from "./Diary.styled";
import { useEffect, useState } from "react";
import { selectDiary, selectISError, selectIsLoading, selectSearchData} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/operations";
import { resetDiaryState } from "../../redux/diarySlice";
import * as Yup from 'yup';
import { Modal } from "../Modal/Modal";
import useModal from "../Modal/useModal";
import { InputSearchModal } from "../Modal/InputSearchModal";


export const Diary = () =>{
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
     const [gramaj, setGramaj] = useState(100);
     const searchData = useSelector(selectSearchData);
     const isLoading = useSelector(selectIsLoading);
     const isError = useSelector(selectISError);
  const { open, close, isOpen } = useModal();   
 
 const handleProductSelect =(product)=>{
   setSelectedProduct(product);
   setQuery(product.title)
 };

 const calculateKcal=()=>{
  if(selectedProduct){
   const kcalPer100 = selectedProduct.calories;
   const kcal = (gramaj/100)*kcalPer100;
   return kcal

  }
  return 0;
 }

 const handleGramajChange = (e) => {
  const newGramaj = parseInt(e.target.value, 10);
  if (!isNaN(newGramaj)) {
    setGramaj(newGramaj);
  }
};

useEffect(() => {
  if (query) {
    dispatch(searchProducts(query));
  }
}, [query, dispatch]);

console.log("Select Search data:", searchData);

const handleReset = () => {
  dispatch(resetDiaryState());
  setSelectedProduct(null);
  setQuery('');
};

const validationSchema = Yup.object({
  query: Yup.string().required('Required'),
});

const initialValues = {
  query: '',
}

return(
    <>
    {/* <div> */}
        <Formik 
         initialValues={initialValues}
         validationSchema={validationSchema}
        //  onSubmit={handleSearch}
        >
           {({ setFieldValue }) => (
        <Form>
          <FormContainer>
            <InputStyled 
              name= "products"
              // onChange = {handleSearch}
              placeholder = "Enter product name"
              value = {query}
              onChange ={(e)=>{
                setQuery(e.target.value);
                setFieldValue('query', e.target.value);
               
              }}
            />
            <ErrorMessage name = 'products'/>

            <InputNumber
              name = "grams" 
              placeholder="Grams"
            />  
            <InputNumber
              name = "kcal" 
              placeholder="Kcal"
            />  
           
          </FormContainer>
        </Form>
        )} 
      </Formik>
      
      <div>
      <h5>Search Results</h5>
      {searchData && searchData.map((item, index) => (
        <div key={index}>
          <p>Title: {item.title}</p>
          <p>Categories: {item.categories}</p>
          <p>Weight: {item.weight}</p>
          <p>Calories: {item.calories}</p>
        </div>
      ))}
    </div>



      {/* {isOpen && 
      searchData ?
      <Modal onClose={close}> {searchData.map((item, index) => (
        <div key={index}>
          Title: {item.title}
          Categories: {item.categories}
          Weight: {item.weight}
          Calories: {item.calories}
        </div>
      ))}
      </Modal> : <Modal onClose={close}>No matches found</Modal>} */}







       <AddButton>+</AddButton>  
      {/* {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      {data && query && (
        <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', position: 'absolute', zIndex: 1, backgroundColor: 'white', width: '100%' }}>
          {data.map((product) => (
            <div
              key={product.title}
              style={{ cursor: 'pointer', marginBottom: '5px', padding: '5px', backgroundColor: selectedProduct === product ? '#f0f0f0' : 'transparent' }}
              onClick={() => handleProductSelect(product)}
            >
              {product.title}
            </div>
          ))}
        </div>
      )}
      {selectedProduct && (
        <div style={{ marginTop: '20px' }}>
          <label>Gramaj (g):</label>
          <input type="number" value={gramaj} onChange={handleGramajChange} />
          <br />
          <label>Kcal pentru {gramaj}g:</label>
          <input type="text" value={calculateKcal()} readOnly />
        </div>
      )}
    </div> */}

   </>
)
 

}