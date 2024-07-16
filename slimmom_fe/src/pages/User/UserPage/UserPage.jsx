import { useLocation } from "react-router-dom"
import { UserInfo } from "../../../components/UserInfo/UserInfo"
import { UserPageContainer } from "./UserPage.style"
import { DiaryPage } from "../DiaryPage/DiaryPage"
import { CalculationPage } from "../CalculationPage/CalculationPage"


export const UserPage =()=>{
    const location = useLocation()
    const isDiary = location.pathname ==='/user-diary';
    // const isCalculation = location.pathname = '/user-calculation';
    return(

        <>
        <UserPageContainer>
         <div>
           {isDiary ? <DiaryPage/> : <CalculationPage/>}
           {/* {isCalculation && <CalculationPage/>} */}
         </div>
        <div><UserInfo/></div>
        </UserPageContainer>
        
        
        </>
    )
}