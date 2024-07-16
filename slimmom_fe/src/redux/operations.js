import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7000';
// export const databaseApi = axios.create({
//   baseURL: 'https://wallet.b.goit.study/api/',
// });

//************* */
// AUTH operations
//************* */
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', credentials);
      // After successful registration, add the token to the HTTP header
      
      setAuthHeader(res.data.token);
      toast.success(`Welcome, ${res.data.user.email} !`);

      console.log("resp data:", res.data)

      return res.data;

    } catch (error) {
      console.log("register error", error.response.status);
      switch (error.response.status) {
        case 400:
          toast.error(`Validation error: please check your data`);
          break;
        case 409:
          toast.error(`Error: User with such email already exists`);
          break;
        default:
          toast.error(`An unexpected error occurred`);
          break;
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      toast.success(`Hello, ${res.data.user.email} !`);
      return res.data;
    } catch (error) {
      toast.error(`Email or password is not valid`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getInfo = createAsyncThunk(
  'auth/getInfo',
  async (_, thunkAPI) => {
    try {
      // console.log('Credentials:', credentials);

      const res = await axios.get('/auth/userinfo');
      console.log('Response:', res);

      // setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const getInfo = createAsyncThunk('auth/getInfo', async (_, thunkAPI) => {
//   try {
//     const res = await axios.get('/users/current');
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

//********************* */
// calories operations
//********************* */
export const postDiary = createAsyncThunk(
  '/',
  async (values, thunkAPI) => {

    try {
      const res = await axios.post('/api/diary', values);
      console.log("Raspuns data:", res.data)
      toast.success('Data uploaded successfully!',{
        autoClose: 1200,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      // switch (error.response.status) {
      //   case 400:
      //     toast.error('Validation error: please check your data');
      //     break;
      //   default:
      //     toast.error('An error occurred. Please try again.',{
      //       autoClose: 1200,
      //     });
      //     break;
      // }
      return thunkAPI.rejectWithValue(error.message);
  }
}
);


export const userPostDiary = createAsyncThunk(
  '/user-diary',
  async (values, thunkAPI) => {

    try {
      const res = await axios.post('/api/register-diary', values);
      console.log("Raspuns data:", res.data)
      toast.success('Data uploaded successfully!',{
        autoClose: 1200,
      });
      return res.data.diary;
    } catch (error) {
      console.log("Error response user diary", error.response)
      switch (error.response.status) {
        case 400:
          toast.error('Validation error: please check your data');
          break;
        // case 409:
        //   toast.error(`Error: User with such email already exists`);
        //   break;
        default:
          toast.error('An error occurred. Please try again.',{
            autoClose: 1200,
          });
          break;
      }
      return thunkAPI.rejectWithValue(error.message);
  }
}
);

export const searchProducts = createAsyncThunk(
  'user-search',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`api/search-products?q=${query}`);
      // console.log("response from search products", response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


// export const updateTransaction = createAsyncThunk(
//   'transactions/updateTransaction',
//   async (body, thunkAPI) => {
//     const data = {
//       transactionDate: body.transactionDate,
//       type: body.type,
//       categoryId: body.categoryId,
//       comment: body.comment,
//       amount: body.amount,
//     };
//     try {
//       const res = await axios.patch(`/transactions/${body.id}`, data);
//       toast.success('Transaction updated!');
//       return res.data;
//     } catch (error) {
//       toast.error('Failed updating transaction.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteTransaction = createAsyncThunk(
//   'transactions/deleteTransaction',
//   async (id, thunkAPI) => {
//     try {
//       const res = await axios.delete(`/transactions/${id}`);
//       toast.success('Transaction deleted successfully!');
//       return res.data;
//     } catch (error) {
//       toast.error(`Error! ${error.message}`);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getAllTransactions = createAsyncThunk(
//   'transactions/getAllTransactions',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/transactions');
//       return res.data;
//     } catch (error) {
//       toast.error('Failed getting all transactions.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getCategories = createAsyncThunk(
//   'transactions/getCategories',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/transaction-categories');
//       return res.data;
//     } catch (error) {
//       toast.error('Failed getting transaction categories.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getSummary = createAsyncThunk(
//   'transactions/getSummary',
//   async (params, thunkAPI) => {
//     try {
//       const res = await axios.get('/transactions-summary', {
//         params: {
//           ...(params?.month !== undefined && { month: params.month }),
//           ...(params?.year !== undefined && { year: params.year }),
//         },
//       });
//       return res.data;
//     } catch (error) {
//       toast.error('Failed getting transactions summary.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// //************************* */
// // get currency exchange rates
// //************************* */
// export const getExchangeData = createAsyncThunk(
//   'transactions/getExchangeRate',
//   async (_, thunkAPI) => {
//     try {
//       const currencyAPI = axios.create({
//         baseURL: `https://openexchangerates.org/api/`,
//       });
//       const MY_APP_ID = '7aa87ffdcdef473da08ec8f6f5ed3ec8';
//       const res = await currencyAPI.get(`latest.json?app_id=${MY_APP_ID}`);
//       return res.data;
//     } catch (error) {
//       toast.error('Failed getting exchange rates.');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
