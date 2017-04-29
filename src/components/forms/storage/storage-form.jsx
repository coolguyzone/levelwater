import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitStorage } from '../../../actions'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styles from '../forms.css';
import styles2 from './storage-form.css';




const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.storageForm
  };
};

const mapDispatchToProps = (dispatch) => {

};

class StorageForm extends Component {
  render() {
    return (
      <Route render = {({ history }) => (
        <div className="storage-form" className="form-step">
          <SignUpStep step="5" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Storage #1</h3>
            </div>
          </div>

          <form id="step5" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props;
            history.push('/signup/step6');
          }}>
            <div className="ui grid">
              <div className="column seven wide">
                <label>Name Of Reservoir:</label>
                <label>Type:</label>
                <label>Year Of Construction:</label>
                <label>Storage Capacity (Gallons):</label>
                <label>Condition</label>
              </div>

              <div className="column nine wide">
                <Field name="ReservoirName" component="input" type="text" required />
                <Field name="StorageType" component="select" className="ui dropdown">
                  <option value="Concrete">Concrete</option>
                  <option value="Steel">Steel</option>
                  <option value="Redwood">Redwood</option>
                  <option value="Plastic">Plastic</option>
                </Field>
                <Field name="YearOfConstruction" component="input" type="number" required />
                <Field name="StorageCapacity" component="input" type="number" required />
                <Field name="StorageCondition" component="select" className="ui dropdown">
                  <option value="Great">Great</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </Field>
              </div>
            </div>
            <div className="ui grid">

              <div id="revenue-costs-submit-button" className="column sixteen wide">
                <button className="ui button">+ Add More Storage</button>
              </div>
            </div>

            <div className="ui grid">
              <SignUpBackButton to="/signup/step4"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button className="ui button">Continue To Pumping &gt;</button>
              </div>
            </div>
          </form>
        </div>
      )} />
    );
  }
}

StorageForm = reduxForm({
  form: 'storage'
})(StorageForm);

export default connect (mapStateToProps, mapDispatchToProps)(StorageForm);