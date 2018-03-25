import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Header } from './profile-styles';
import EventsList from '../EventsList/AllEventsList/events-list';
import AdminEventsList from '../EventsList/AdminEventsList/admin-events-list';
import AdminCreateEvent from '../EventsList/AdminEventsList/admin-create-event';
AdminCreateEvent


class Profile extends Component {
  render() {
    let isLoggedIn = this.props.loginData.hasOwnProperty('token');
    if (!isLoggedIn) {
      this.props.history.push('/logowanie');
      return <div>Loading...</div>;
    }

    let isAdmin = this.props.loginData.user.isAdmin;

    if (!isAdmin) {
      return (
        <Container>
          <Header>Zwykły user</Header>
          <EventsList></EventsList>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header>Admin</Header>
          <AdminEventsList></AdminEventsList>
          <AdminCreateEvent></AdminCreateEvent>
        </Container>
      );
    }
  }
}

function mapStateToProps({ loginData }) {
  return { loginData };
}

export default connect(mapStateToProps)(Profile);