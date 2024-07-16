import { useLocation } from "react-router-dom";
import banana from "../assets/Banana.png";
import leaves from "../assets/Leaves.png";
import strawberry from "../assets/Strawberry.png";
import vector from "../assets/Vector 3 tableta.png";
import vectordsk from "../assets/Vector 3.png";
import { BananaStyled, LevesStyled, StrawberryStyled, VectorDskStyled, VectorStyled } from "./RightImages.styled";

export const RightImages = () =>{
    const location = useLocation();
    const isHome = location.pathname === '/';
    // const isLogin = location.pathname ==='/login';
    // const isRegister = location.pathname ==='/register';
    return(
     <>
     <VectorStyled src={vector} />
     <VectorDskStyled src={vectordsk} />
     <BananaStyled src={banana}/>
     <LevesStyled 
       src={leaves} 
       isHome = {isHome} 
    />
     <StrawberryStyled src={strawberry}/>
     </>

    )
}