import React from 'react';
import {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (<div>
      <input
          className = "mdl-textfield__input"
          type="text"
          {...field.input}
        />
    </div>);
  }
  render() {
    return (<form>
      <Field name="title" component={this.renderTitleField}/>
    </form>);
  }
}
export default reduxForm({form: 'PostsNewForm'})(PostsNew);
