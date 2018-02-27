import React from 'react';
import {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Link from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field;
    const className = `form-group ${field.meta.touched && field.meta.error
      ? 'has danger'
      : ""}`;

    return (<div className={className}>
      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input}/>
      <div className="text-help">
        {
          field.meta.touched
            ? field.meta.error
            : ''

        }
      </div>
    </div>);
  }
  onSubmit(values) {

    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

      <Field name="title" component={this.renderField} label="Title"/>
      <Field name="categories" component={this.renderField} label="Kategorie"/>
      <Field name="content" component={this.renderField} label="PostContent"/>
      <button type="submit" class="btn btn-secondary">
        Submit</button>
      <Link to="/" className="btn btn-danger"></Link>
    </form>);
  }
}
function validate(values) {
  //  console.log(values);
  this.props.createPost(values);

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = "enter some Content!";
  }

  const errors = {};

  //if errors is empty the form is fine to submit
  //if errors has any propertyreduy assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, form: 'PostsNewForm'})
  (connect(null, {createPost})
  (PostsNew));
