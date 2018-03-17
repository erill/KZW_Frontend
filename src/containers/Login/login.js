import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { logIn } from '../../actions';
import { Container, Header } from './login-styles';

class Login extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          type={field.type}
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.logIn(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Header>Logowanie</Header>
        <p>{this.props.login}</p>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          <button type="submit">Zaloguj się</button>
        </form>
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

function mapStateToProps({ login }) {
  return { login };
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps, { logIn })(Login)
);