import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <MenuItem hamburger><Link to="/" className="link">Strona główna</Link></MenuItem>
                <MenuItem hamburger><Link to="/o-projekcie" className="link">O projekcie</Link></MenuItem>
                <MenuItem hamburger><Link to="/wspolpraca" className="link">Współpraca</Link></MenuItem>
                <MenuItem hamburger><Link to="/" className="link">Zapisy</Link></MenuItem>
                <MenuItem hamburger><Link to="/galeria" className="link">Galeria</Link></MenuItem>
                <MenuItem hamburger><Link to="/" className="link">Kontakt</Link></MenuItem>
                <MenuItem hamburger><Link to="/logowanie" className="link">Logowanie</Link></MenuItem>
                <MenuItem hamburger><Link to="/rejestracja" className="link">Rejestracja</Link></MenuItem>
              </Menu>
            </MenuContainer>
          ) : (
            <Container>
              <MenuItem><Link to="/" className="link">Strona główna</Link></MenuItem>
              <MenuItem><Link to="/o-projekcie" className="link">O projekcie</Link></MenuItem>
              <MenuItem><Link to="/wspolpraca" className="link">Współpraca</Link></MenuItem>
              <MenuItem><Link to="/" className="link">Zapisy</Link></MenuItem>
              <MenuItem><Link to="/galeria" className="link">Galeria</Link></MenuItem>
              <MenuItem><Link to="/" className="link">Kontakt</Link></MenuItem>
              <MenuItem><Link to="/logowanie" className="link">Logowanie</Link></MenuItem>
              <MenuItem lastElement><Link to="/rejestracja" className="link">Rejestracja</Link></MenuItem>
            </Container>
          )
        }
      </Media>
    );
  }
}