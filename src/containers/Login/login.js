import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { ContainerTest, Container, FieldContainer, Header, Form, Label, Input, Button, RegisterLink } from './login-styles';

class Login extends Component {
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
    this.props.login(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ContainerTest>
        <Container>
          <Header>Logowanie</Header>
          <p>{this.props.loginData}</p>
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
            <RegisterLink>Rejestracja</RegisterLink>
          </Form>
        </Container>
      </ContainerTest>
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