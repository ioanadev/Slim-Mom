import { RightImages } from "../components/RightImages";
import { LoginForm } from "../components/LoginForm/LoginForm";
// import { RegisterForm } from "../components/RegisterForm";
import { AuthTitle} from "../components/Title/Title";
// import { BananaStyled, LevesStyled, VectorDskStyled, VectorStyled } from "./HomePage.style";


export const LoginPage = () =>{

    return (
        <>
        <AuthTitle title="Log in"/>
         <LoginForm/>
         <RightImages/>
       
        </>
       
    )
}