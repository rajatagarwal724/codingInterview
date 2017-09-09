import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

// The field argument contains an event Handler or two
// that is going to be responsible for making sure
// that the OOTB Field is responsible for handling this very text input 
// inside the function
renderField(field) {
    return (
        <div className="form-group">
            <label> {field.label} </label>
            <input 
                className="form-control"
                type="text"
                {...field.input}
            />
        </div>
    );
}



/* The ... here indicates that field.input is an Object here
            // and all of the different properties and this object to be communicated
            // as props to the input
            {...field.input} */
/* The function renderTitleField is called without parenthesis (as a field) as it is a 
    reference to a function so that the field can render itself multiple times. */
    render() {
        return(
            <form>
                <Field label="TITLE" name = "title" component = {this.renderField} />
                <Field label="CATEGORY" name = "category" component = {this.renderField} />
                <Field label="POST CONTENT" name = "content" component = {this.renderField} />
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
// values argument contains the data filled in the form

    const errors = {};
    // Validate the input from 'values' for each of the defined properties

    if(!values.title) {
        errors.title = "Enter a Title for the POST !";
    }
    if(!values.category) {
        errors.title = "Enter the Category of the Post";
    }
    if(!values.content) {
        errors.content = "Enter the Content for the Post";
    }

    // If "errors" object is Empty, the form is fine to Submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostNew);