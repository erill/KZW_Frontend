import React, { Component } from 'react';
import { Footer, FlexboxWrapper, Item, Title, List }
       from '../../style/style-footer.css';


export default class FooterClass extends Component {
  render() {
    return (
      <Footer>
        <FlexboxWrapper>
          <Item>
            <Title>Menu</Title>
            <List>
              <li>Strona główna</li>
              <li>O projekcie</li>
              <li>Współpraca</li>
              <li>Zapisy</li>
              <li>Galeria</li>
              <li>Kontakt</li>
            </List>
          </Item>
          <Item>
            <Title>Adres</Title>
            <Title>Kontakt</Title>
          </Item>
          <Item>
            <Title>Organizator</Title>
            <p>Stowarzyszenie Studenckie WIGGOR</p>
          </Item>
        </FlexboxWrapper>
      </Footer>
    );
  }
}
