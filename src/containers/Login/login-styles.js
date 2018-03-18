import styled from 'styled-components';

export const Container = styled.div`
  padding: 10% 0;
  text-align: center;
  background-color: #F6F6F6;
`;

export const BoxContainer = styled.div`
  width: 15%;
  margin: 0 auto;
  padding: 25px 40px;
  border-radius: 20px;
  background-color: white;

  @media (max-width: 767px) {
    width: 60%;
  }
  @media (min-width: 768px) and (max-width: 1300px) {
    width: 30%;
  }
`;

export const FieldContainer = styled.div`
  text-align: left;
`;

export const ErrorText = styled.p`
  display: block;
  color: #222222;
  margin: 10px 0 30px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'RalewayRegular', sans-serif;
`;

export const Header = styled.h1`
  display: block;
  color: #222222;
  margin: 10px 0 30px;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'RalewayRegular', sans-serif;
`;

export const Form = styled.form`
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  color: #222222;
  margin: 15px 0 10px;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: left;
  font-family: 'RalewayRegular', sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  border: 3px solid #E1E1E1;
  border-color: ${props => props.error ? '#AE4E5D' : '#E1E1E1' };
  padding: 6px 0;
`;

export const Button = styled.button`
  color: white;
  background-color: #AE4E5D;
  border: 2px solid #AE4E5D;
  border-radius: 35px;
  padding: 12px 55px;
  margin: 30px 0 0;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 400;
  font-family: 'RalewayRegular', sans-serif;
  transition: .5s all;

  &:hover {
    background-color: white;
    color: #AE4E5D;
    cursor: pointer;
  }
`;

export const RegisterLink = styled.h3`
  display: block;
  color: #222222;
  margin: 25px 0 0;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: 'RalewayRegular', sans-serif;
`;