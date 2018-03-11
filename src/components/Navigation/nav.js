import React, { Component } from 'react';
import Media from "react-media";
import { slide as Menu } from 'react-burger-menu';
import { Container, MenuItem } from './nav-styles';

export default class Nav extends Component {
  render() {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47',
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
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        overflow: 'none'
      },
      bmMorphShape: {
        fill: '#373A47'
      },
      bmItemList: {
        color: '#B8B7AD',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    return (
      <Media query="(max-width: 966px)">
        {matches =>
          matches ? (
            <Menu styles={ styles } width={ '250px' }>
              <MenuItem href="/" hamburger>Strona główna</MenuItem>
              <MenuItem href="/" hamburger>O projekcie</MenuItem>
              <MenuItem href="/" hamburger>Współpraca</MenuItem>
              <MenuItem href="/" hamburger>Zapisy</MenuItem>
              <MenuItem href="/" hamburger>Galeria</MenuItem>
              <MenuItem href="/" hamburger>Kontakt</MenuItem>
            </Menu>
          ) : (
            <Container>
              <MenuItem href="/">Strona główna</MenuItem>
              <MenuItem href="/">O projekcie</MenuItem>
              <MenuItem href="/">Współpraca</MenuItem>
              <MenuItem href="/">Zapisy</MenuItem>
              <MenuItem href="/">Galeria</MenuItem>
              <MenuItem href="/">Kontakt</MenuItem>
            </Container>
          )
        }
      </Media>
    );
  }
}