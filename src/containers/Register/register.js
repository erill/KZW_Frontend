import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { Container, Header } from './register-styles';

class Register extends Component {
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
    // console.log(values);
    this.props.register(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Header>Rejestracja</Header>
        {/* <p>{this.props.login}</p> */}
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          <button type="submit">Zarejestruj się</button>
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

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(
  connect(null, { register })(Register)
);