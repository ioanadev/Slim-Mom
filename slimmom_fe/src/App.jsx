import './App.css';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import {Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Line } from './App.style';
import { UserPage } from './pages/User/UserPage/UserPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
// import { RegisterDiaryPage } from './pages/RegisterCalculatorPage';

function App() {

return (
    <>
   
     <Header/>
     <Line/>
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user-calculation" element={<UserPage/>}/>
        <Route path="/user-diary" element={<UserPage/>}/>
        <Route path='*' element = {<PageNotFound/>}/>
     </Routes>
  

    </>
)


}

export default App
