import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
//import SelectInput from '../common/SelectInput';


export const UserForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="name"
                label="Name"
                placeholder="Name of the user"
                component={FieldInput}
            />

            <Field
                type="text"
                name="email"
                label="Email"
                placeholder="Email of the user"
                component={FieldInput}
            />

            <Field
                type="text"
                name="city"
                label="City"
                placeholder="City of the user"
                component={FieldInput}
            />

            <Field
                type="text"
                name="phone"
                label="Phone"
                placeholder="Phone of user"
                component={FieldInput}
            />

            <Field
                type="text"
                name="website"
                label="Website"
                placeholder="Website of user"
                component={FieldInput}
            />

            <Field
                type="text"
                name="companyName"
                label="Company Name"
                placeholder="company Name of user"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.title = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }

    if (!values.website) {
        errors.website = 'Required';
    }

    return errors;
};



UserForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'UserForm',
    validate
})(UserForm);
