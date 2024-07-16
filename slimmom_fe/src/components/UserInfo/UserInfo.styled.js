import styled from "styled-components";
import { ListItem, ProductsContainer } from "../Modal/Modal.styled";

export const InfoContainer = styled.div`
background-color: rgba(240, 241, 243, 1);
/* background-color: brown; */
width: 517px;
height: 100vh;
top: 0;
right:0;
bottom: 0;
position: absolute;
padding:15px;
`

export const UserMenu = styled.div`
/* display: flex; */

`
export const UserListContainer = styled.div`
padding-left: 94px;
padding-right: 123px;
`

export const UserInfoTitle = styled.p`
font-weight:700;
font-size: 14px;
line-height: 17px;
color: rgba(33, 33, 33, 1);
display: flex;
justify-content: center;
margin-top:60px;
margin-right: 20px;
`
export const ListContainer = styled.div`
display: flex;
justify-content: space-between;
/* padding-left: 10px;
padding-right: 10px; */
`
export const Info = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 17px;
margin-bottom: 5px;
color: rgba(155, 159, 170, 1);
`
export const UserProducts = styled(ProductsContainer)`
height:250px;
`
export const UnorderedList = styled.ul`

/* background-color: beige; */
/* overflow-y:auto; */
padding: 1px;
`
export const UserListItem = styled(ListItem)`
 list-style-type: none;
/*padding-left:20px; */

  &::before{
    content: none; /* Display the counter */

  }
`
export const UserParagraf = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 17px;
color:rgba(155, 159, 170, 1);

`
export const UserInfoMeniu = styled.div`
  display:flex;
  /* background-color: fuchsia; */
  justify-content: end;
  align-items: center;
  margin-right: 16px;
  color: rgba(155, 159, 170, 1);
  padding-top:100px;
  gap: 20px;

   `