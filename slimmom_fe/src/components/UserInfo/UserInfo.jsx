import { useDispatch, useSelector } from "react-redux";
import { selectDiary, selectIsLoading, selectUser } from "../../redux/selectors";
import { Container } from "../Modal/Modal.styled";
import { StyledLink } from "../NavBar/NavBarr.styled";
import { 
    Info, 
    InfoContainer, 
    ListContainer, 
    UserInfoTitle, 
    UserListContainer, 
    UserMenu, 
    UserProducts,
    UnorderedList, 
    UserListItem,
    UserParagraf} from "./UserInfo.styled";
// import { fetchUserInfo, userPostDiary } from "../../redux/operations";
import { useEffect } from "react";
import {PacmanLoader} from 'react-spinners';

export const UserInfo = ()=>{
    const data = useSelector(selectDiary);
    const isLoading = useSelector(selectIsLoading);
    const user = useSelector(selectUser);
    console.log(data);
    console.log(user);


    return (
        <>
           <InfoContainer >
            <div>{ isLoading ? <PacmanLoader/> : user.name}</div>
              <UserMenu>
                  <StyledLink to="/login">exit</StyledLink>
              </UserMenu>

              <UserInfoTitle>Summary for "date"</UserInfoTitle>

                <UserListContainer>
                  <ListContainer>
                      <Info>Left</Info>
                      <Info>000 kcal</Info>
                  </ListContainer>
                  <ListContainer>
                      <Info>Consumed</Info>
                      <Info>000 kcal</Info>
                  </ListContainer>
                  <ListContainer>
                      <Info>Daily rate</Info>
                      <Info>
                        {data ? <Info>{data.daily_calories}</Info> : <Info>000</Info>} 
                        kcal</Info>
                  </ListContainer>
                  <ListContainer>
                      <Info>n% of normal</Info>
                      <Info>000 kcal</Info>
                  </ListContainer>
                  <ListContainer>
                      <Info>Left</Info>
                      <Info>000 kcal</Info>
                  </ListContainer>
               </UserListContainer>

              <UserInfoTitle>Food not recommended</UserInfoTitle>
                <Container>
                    <UserProducts>
                   {data ?  <UnorderedList>
                       {data.non_recommended_products.map((product, index) =>(
                         <UserListItem key={index}>
                            {product}
                          </UserListItem>
                     ))}
                     </UnorderedList>: <UserParagraf>Your diet will be displayed here</UserParagraf> }
                     
                   </UserProducts>
                </Container> 
            </InfoContainer>
        </>
    )
} 
