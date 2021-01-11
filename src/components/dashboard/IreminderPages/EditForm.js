import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { editReminder } from '../../../actions/ireminderActions';

class EditForm extends Component {

  render() {

    const today = new Date(Date.now());
    const { remindNote, time } = this.state;

    return (
      <div>
        <Formik

          initialValues = {{ remindNote: {remindNote}, time: {time} }}
          
          validationSchema = {Yup.object({
            remindNote: Yup
              .string()
              .required('Please enter reminder details!'),
            time: Yup
              .date()
              .min(today, "You can't go back to the past, please enter a future date..."
              )
              .required('Please enter the date and time!'),
          })}

          onSubmit={
            (values, { resetForm }) => {
              const correctTime = values.time;
              correctTime.slice(-6, -5);
              const updReminder = {
                remindNote: values.remindNote,
                time: correctTime
              };

              const { id } = this.props.match.params;

              // this.props.editReminder(updReminder);
              resetForm();
            }
          }
          >

          {({ isSubmitting }) => (
            <Form>
              <div className="ireminder-form">
                <div className="ireminder-input">
                  <Field as="textarea" name="remindNote" placeholder="Remind me of..."/>
                  <ErrorMessage name="remindNote" component="p" />
                  
                  <Field type="datetime-local" name="time" />
                  <ErrorMessage name="time" component="p" />
                </div>
                
                <button className="shake" type="submit" disabled={isSubmitting}>
                  <i className="fas fa-alarm-clock"></i>
                </button>
              </div>
            </Form>
          )}

        </Formik>
      </div>
    )
  }
}

// EditForm.propTypes = {
//   editReminder: PropTypes.func.isRequired
// }

// export default connect(null, { editReminder })( IreminderForm);
export default  EditForm;