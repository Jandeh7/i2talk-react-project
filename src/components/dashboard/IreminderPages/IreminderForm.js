import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Error from '../../forms/Error';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReminder } from '../../../actions/ireminderActions';
import { v4 as uuid } from 'uuid';

class IreminderForm extends Component {
  render() {
    const today = new Date(Date.now());
    var loggedUserId= localStorage.getItem("userId")
    // Making out a field error space
    const defaultErr = "error goes here";
    var errSpace = defaultErr;

    return (
      <div>
        <Formik

          initialValues={{ ID: uuid(), message: '', timeCompleted: '' }}
          
          validationSchema = {Yup.object({
            message: Yup
              .string()
              .required('Please enter reminder details!'),
            timeCompleted: Yup
              .date()
              .min(today, "You can't go back to the past, please enter a future date..."
              )
              .required('Please enter the date and time!'),
          })}

          onSubmit={
            (values, { resetForm }) => {
              const data = {
                title: "reminder",
                userID: loggedUserId,
                ...values
              };

              this.props.addReminder(data);

              resetForm();
            }
          }
          >

          {({ touched, errors, isSubmitting }) => (
            <Form>
              <div className="ireminder-form">
                <div className="ireminder-input">
                  <Field as="textarea" name="message" placeholder="Remind me of..."/>
                  {errors.message && touched.message?
                    <Error 
                      errSpace = { errors.message }
                    /> :
                    <Error
                      errSpace = { defaultErr }
                    />
                  }
                  
                  <Field type="datetime-local" name="timeCompleted" />
                  {errors.timeCompleted && touched.timeCompleted?
                    <Error 
                      errSpace = { errors.timeCompleted }
                    /> :
                    <Error
                      errSpace = { defaultErr }
                    />
                  }
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

IreminderForm.propTypes = {
  addReminder: PropTypes.func.isRequired
}

export default connect(null, { addReminder })( IreminderForm);