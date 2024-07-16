import styled from 'styled-components';

export const Line = styled.hr`
/* min-width:300px; */
height: 2px;
background-color:rgba(224, 224, 224, 1);
color: rgba(224, 224, 224, 1);
margin-block-start:0;
margin-block-end:0;
margin-inline-end:0;
margin-inline-start:0;
width:100%;

@media only screen and (min-width: 1280px){
    display: none;
  }
`