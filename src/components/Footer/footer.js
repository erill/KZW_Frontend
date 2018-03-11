import React, { Component } from 'react';
import { Footer, FlexboxWrapper, Item, Title, List, ListItem, Link, ItemContent, Image } from './footer-styles';


export default class FooterClass extends Component {
  render() {
    return (
      <Footer>
        <FlexboxWrapper>
          <Item>
            <Title>Menu</Title>
            <List>
              <ListItem><Link href="#">Strona główna</Link></ListItem>
              <ListItem><Link href="#">O projekcie</Link></ListItem>
              <ListItem><Link href="#">Współpraca</Link></ListItem>
              <ListItem><Link href="#">Zapisy</Link></ListItem>
              <ListItem><Link href="#">Galeria</Link></ListItem>
              <ListItem><Link href="#">Kontakt</Link></ListItem>
            </List>
          </Item>
          <Item>
            <Title>Adres</Title>
            <ItemContent> 
              ul. Kamienna 57/10
              <br />
              53-307 Wrocław
            </ItemContent>
            <Title>Kontakt</Title>
            <ItemContent>
              Email: kobieta@wiggor.pl
              < br/>
              Telefon: (71) 36 80 634
            </ItemContent>
          </Item>
          <Item>
            <Title>Organizator</Title>
            <p>Stowarzyszenie Studenckie WIGGOR</p>
            <Image src="../../../img/logo-small.png" alt="" />
          </Item>
        </FlexboxWrapper>
      </Footer>
    );
  }
}
