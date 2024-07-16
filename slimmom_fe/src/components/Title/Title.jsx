import { StyleAuthTitle, StyleModalTitle, StyleTitle } from "./Title.style"

export const Title = ({title}) =>{
return(
  <StyleTitle>{title}</StyleTitle>  
)

}

export const AuthTitle = ({title}) =>{
  return(
  <StyleAuthTitle>{title}</StyleAuthTitle>
  )
}

export const ModalTitle = ({title}) =>{
  return(
  <StyleModalTitle>{title}</StyleModalTitle>
  )
}