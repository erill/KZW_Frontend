import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import TeamDiv from './Team_styles';

export default class Team extends Component {
//Nasz zespół - dane o osobach
  render() {
    const Person1 = ({
      src: '',
      alt: "aleksandra Cichoń",
      name: "Aleksandra Cichoń",
      position: "Koordynator główny",
      email: "aleksandra.cichon@wiggor.pl",
      fb: "https://www.facebook.com/ola.cichon"
    })

    const Person2 = ({
      src: '',
      alt: "Maria Jamrozik",
      name: "Maria Jamrozik",
      position: "Koordynator ds. Kontaktów zewnętrznych",
      email: "maria.jamrozik@wiggor.pl",
      fb: "https://www.facebook.com/marysia.jamrozik"
    })
    const Person3 = ({
      src: '',
      alt: 'Paulina Pawelec',
      name: 'Paulina Pawelec',
      position: 'Koordynator ds. Marketingu',
      email: 'paulina.pawelec@wiggor.pl',
      fb: 'https://www.facebook.com/paulina.pawelec7'
    })
    const Person4 = ({
      src: '',
      alt: 'Katarzyna Chabraś',
      name: 'Katarzyna Chabraś',
      position: 'Koordynator ds. Public Relations',
      email: 'katarzyna.jamrozik@wiggor.pl',
      fb: 'https://www.facebook.com/kasia.chabras'
    })

    return(
<div>
Hello {Person1.alt}
</div>
    )}
}
