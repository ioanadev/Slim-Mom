import { StyledLink } from "../../components/NavBar/NavBarr.styled"
import { Headings, RedirectParagraf, RedirectLink } from "./PageNotFound.styled"


export const PageNotFound= () =>{

    return (
      <>
      <Headings>Page not found!</Headings>
      
       <RedirectParagraf> You can go to <RedirectLink to = "/"> Home Page</RedirectLink ></RedirectParagraf>
      </>

    )

}