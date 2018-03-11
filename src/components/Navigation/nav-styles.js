import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: white;
  font-family: 'RalewayBold', sans-serif;
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.a`
  padding: 10px;
  color: #605E5E;
  text-decoration: none;
  font-size: ${props => props.hamburger ? '16px' : '14px' };
  font-family: ${props => props.hamburger ? 'RalewayBold' : 'RalewayRegular' };
  transition: ${props => props.hamburger ? 'all 1s' : 'all .4s' };

  &:hover {
    color: #CCC;
  }

  &:active {
    color: #91414D;
  }
`;