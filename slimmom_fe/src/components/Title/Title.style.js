import styled from 'styled-components';

export const StyleTitle = styled.div`
  font-weight: 700;
  font-size:18px;
  line-height: 25.2px;
  justify-content: center;
  color: rgba(33, 33, 33, 1);
  margin-top: 32px;
  margin-left: 20px;
  margin-right: 20px;

 @media only screen and (min-width: 768px) {
   font-size:34px;
   line-height: 47.6px;
  }

  @media only screen and (min-width: 1280px) {
   margin-top: 147px;
   width:608px;
  }
`
export const StyleAuthTitle = styled.div`
  font-weight: 700;
  font-size:14px;
  line-height: 17.01px;
  display:flex;
  justify-content: center;
  text-transform: uppercase;
  color:rgba(252, 132, 45, 1);
  margin-bottom: 60px;
  margin-top:40px;

  @media only screen and (min-width: 768px) {
   margin-top: 160px;
   justify-content:start;
   margin-left:16px;
  }
/*
  @media only screen and (min-width: 1280px) {
   margin-top: 147px;
   width:608px;
  } */
`
export const StyleModalTitle = styled.div`
  font-weight: 700;
  font-size:18px;
  line-height:25px;
  text-align:center;
  color:rgba(33, 33, 33, 1);

  @media only screen and (min-width: 1280px){
   font-size:26px;
   line-height:36px;
  }


`