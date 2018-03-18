import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Table = styled.table`
  width: 75%;
  margin: 100px auto;
  padding: 10px;
  font-family: 'RalewayRegular', sans-serif;
  text-align: left;
  background: #fff;
  border-radius: 3px;
  border-spacing: 0;

  @media only screen and (max-width: 1200px) {
    width: 85%;
  }

  @media only screen and (max-width: 767px) {
    width: 95%;
  }
`;

export const TableHead = styled.thead`
  font-size: 26px;
  background: #d58d83;
  color: #fff;

  @media only screen and (max-width: 1200px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 991px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 16px;
  }

`;

export const TableRow = styled.tr`
  &:last-of-type td {
    border: none;
  }
`;

export const TableRowHead = styled.th`
  padding: 10px;
  font-weight: 400;

  &:first-of-type {
    border-radius: 3px 0px 0px 3px;
  }
  
  &:last-of-type {
    border-radius: 0px 3px 3px 0px;
  }
`;

export const TableData = styled.td`
  font-size: 20px;
  padding: 15px 10px;
  border-bottom: 2px solid #d58d83;

  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Checkbox = styled.input`
  transform: scale(2);

  @media only screen and (max-width: 767px) {
    transform: scale(1.5);
  }
`;