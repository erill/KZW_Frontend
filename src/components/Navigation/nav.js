import React, { Component } from 'react';
import Media from "react-media";
import { slide as Menu } from 'react-burger-menu';
import { Container, Image, MenuContainer, MenuItem } from './nav-styles';

export default class Nav extends Component {
  render() {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '24px',
        height: '20px',
        right: '24px',
        top: '24px'
      },
      bmBurgerBars: {
        background: '#91414D',
        transition: 'all .5s'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#BDC3C7'
      },
      bmMenu: {
        background: '#373A47',
        background: '#E8E8E8',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        overflow: 'none'
      },
      bmMenuWrap: {
        top: 0
      },
      bmMorphShape: {
        fill: '#373A47'
      },
      bmItemList: {
        color: '#B8B7AD',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        top: '0'
      }
    }

    return (
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <MenuContainer>
              <Image src="../../../../img/logo.png" alt="Logo" />
               <Menu styles={ styles } width={ '250px' }>
                <MenuItem href="/" hamburger>Strona główna</MenuItem>
                <MenuItem href="/" hamburger>O projekcie</MenuItem>
                <MenuItem href="/" hamburger>Współpraca</MenuItem>
                <MenuItem href="/" hamburger>Zapisy</MenuItem>
                <MenuItem href="/" hamburger>Galeria</MenuItem>
                <MenuItem href="/" hamburger>Kontakt</MenuItem>
                <MenuItem href="/" hamburger>Logowanie</MenuItem>
                <MenuItem href="/" hamburger>Rejestracja</MenuItem>
              </Menu>
            </MenuContainer>
          ) : (
            <Container>
              <MenuItem href="/">Strona główna</MenuItem>
              <MenuItem href="/">O projekcie</MenuItem>
              <MenuItem href="/">Współpraca</MenuItem>
              <MenuItem href="/">Zapisy</MenuItem>
              <MenuItem href="/">Galeria</MenuItem>
              <MenuItem href="/">Kontakt</MenuItem>
              <MenuItem href="/">Logowanie</MenuItem>
              <MenuItem href="/" lastElement >Rejestracja</MenuItem>
            </Container>
          )
        }
      </Media>
    );
  }
}