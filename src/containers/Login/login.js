import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Container, BoxContainer, FieldContainer, ErrorText, Header, Form, Label, Input, Button, RegisterLink } from './login-styles';

class Login extends Component {
  renderField(field) {
    const textError = `${field.meta.touched && field.meta.error ? 'error' : ''}`;

    return (
      <FieldContainer>
        <Label>{field.label}</Label>
        <Input
          error = {textError}
          type={field.type}
          {...field.input}
        />
        <ErrorText>
          {field.meta.touched ? field.meta.error : ''}
        </ErrorText>
      </FieldContainer>
    );
  }

  onSubmit(values) {
    this.props.login(values);
  }

  render() {
    const { handleSubmit } = this.props;
    let loginFailed = '';

    if (this.props.loginData) {
      if (!this.props.loginData.token) {
        loginFailed = 'Niepoprawne dane logowania';
      } else {
        loginFailed = '';
      }
    }

    return (
      <Container>
        <BoxContainer>
          <Header>Logowanie</Header>
          <p>{loginFailed}</p>
          {console.log(this.props.loginData)}
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="E-mail"
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
            <Button type="submit">Zaloguj</Button>
            <RegisterLink>
              <Link to="/rejestracja">Rejestracja</Link>
            </RegisterLink>
          </Form>
        </BoxContainer>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Wprowadź email";
  }

  if (!values.password) {
    errors.password = "Wprowadź hasło";
  }

  return errors;
}

function mapStateToProps({ loginData }) {
  return { loginData };
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps, { login })(Login)
);