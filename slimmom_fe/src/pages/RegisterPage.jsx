import { RegisterForm } from "../components/RegistrationForm/RegisterForm";
import { RightImages } from "../components/RightImages";
import { AuthTitle, Title } from "../components/Title/Title";


export const RegisterPage = () =>{

    return (
        <>
        <AuthTitle title="Register"/>
         <RegisterForm/>
         <RightImages/>
        </>
       
    )
}