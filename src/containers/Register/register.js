import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { ContainerTest, Container, FieldContainer, Header, Form, Label, Input, Button, LoginLink } from './register-styles';

class Register extends Component {
  renderField(field) {
    return (
      <FieldContainer>
        <Label>{field.label}</Label>
        <Input
          type={field.type}
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </FieldContainer>
    );
  }

  onSubmit(values) {
    this.props.register(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ContainerTest>
        <Container>
          <Header>Rejestracja</Header>
          <p>{this.props.registerData}</p>
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Imię"
              type="text"
              name="name"
              component={this.renderField}
            />
            <Field
              label="Nazwisko"
              type="text"
              name="surname"
              component={this.renderField}
            />
            <Field
              label="Uniwersytet"
              type="text"
              name="university"
              component={this.renderField}
            />
            <Field
              label="Rok studiów"
              type="number"
              name="year_of_study"
              component={this.renderField}
            />
            <Field
              label="Email"
              type="email"
              name="email"
              component={this.renderField}
            />
            <Field
              label="Hasło"
              type="password"
              name="password"
              component={this.renderField}
            />
            <Field
              label="Powtórz hasło"
              type="password"
              name="password2"
              component={this.renderField}
            />
            <Button type="submit">Zarejestruj</Button>
            <LoginLink>Logowanie</LoginLink>
          </Form>
        </Container>
      </ContainerTest>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Wprowadź imię";
  }

  if (!values.surname) {
    errors.surname = "Wprowadź nazwisko";
  }

  if (!values.university) {
    errors.university = "Wprowadź uniwesytet";
  }

  if (!values.year_of_study) {
    errors.year_of_study = "Wprowadź rok studiów";
  }

  if (!values.email) {
    errors.email = "Wprowadź email";
  }

  if (!values.password) {
    errors.password = "Wprowadź hasło";
  }

  if (!values.password2) {
    errors.password2 = "Wprowadź hasło";
  }

  return errors;
}

function mapStateToProps({ registerData }) {
  return { registerData };
}

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(
  connect(mapStateToProps, { register })(Register)
);