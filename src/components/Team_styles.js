import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
  background-color: #F2F2F2;
  margin: 0;
  text-align: center;
  padding: 20px;


`
export const HeadSmall = styled.h4`
  font-weight: 400;
  font-family: 'Arial','Helvetica',sans-serif;
  font-size: 12px;
  letter-spacing: 2.2px;
  color: rgb(96, 94, 94);
  cursor: default;


`

export const HeadBig = styled.h2`
  color: #91414D;
  letter-spacing: 0.04em;
  font-size: 30px;
  font-style: italic;
  font-weight: 400;
  font-family: "libre baskerville", serif;
  cursor: default;

`

export const TeamMembers = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width:650px) {
    flex-direction: column;
  }
`

export const Person = styled.div`
  margin: 1.666%;
  width: 30%;
  @media screen and (max-width:650px) {
    width: 98%;
    margin: 1%;
  }
`

export const Pic = styled.img`
  max-width: 131px;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 0.7s;

  &:hover{
    opacity: 1;
  }
  @media screen and (max-width: 650px) {
    opacity: 1;
  }
`


export const TeamName = styled.h3`
  color: #91414D;
  letter-spacing: 0.04em;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  font-family: "libre baskerville", serif;
  margin: 1%;
  cursor: default;
`

 export const TeamPosition = styled.p`
   font-family: 'helvetica', sans-serif;
   font-size: 11px;
   letter-spacing: 1.5px;
   font-weight: lighter;
   color: rgb(56, 54, 54);
 `

 export const TeamMail = styled.p`
 font-family: 'helvetica', sans-serif;
 font-size: 10px;
 font-weight: lighter;
 color: rgb(56, 54, 54);
 margin: 3px;
 `

 export const Fb = styled.img`
  width: 40px;
  margin: 5px;
  opacity: 1;
  transition: opacity 0.7s;

  &:hover{
    opacity: 0.5;
  }
}
 `
