import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { routes } from '../router';
import { Input } from '../../components';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import Api from '../../api';
class ModalSwitch extends Component {
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
      let { location } = this.props;
  
      // set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
      ) {
        this.previousLocation = this.props.location;
      }
    }
  
    render() {
      let { location } = this.props;
  
      let isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
      ); // not initial render
    console.log(isModal);
    return (
      <div>
      
/>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            path={routes.addProducts}
            component={(Add)}
          />
         
        </Switch>
        {isModal ? (
            <Route
              path={routes.addProducts}
              component={(ModalAdd)}
            />
          ) : null}
      </div>
    );
  }
}

function ModalAdd({
  match,
  history,
  fields,
  handleLogin,
  handleFieldChange,
  isError,
  isLoading,
}) {
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  console.log("isModal");

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.75)',
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}
      >
        <Input
          fields={fields}
          name="email"
          placeholder="example@gmail.com"
          label="EMAIL"
          onChange={handleFieldChange}
        />
        <Input
          fields={fields}
          name="password"
          label="PASSWORD"
          onChange={handleFieldChange}
        />

        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}

function Add({
  match,
  history,
  fields,
  handleLogin,
  handleFieldChange,
  isError,
  isLoading,
}) {
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  console.log("notModal");

  return (
    <div>
      <Input
        fields={fields}
        name="email"
        placeholder="example@gmail.com"
        label="EMAIL"
        onChange={handleFieldChange}
      />
      <Input
        fields={fields}
        name="password"
        label="PASSWORD"
        onChange={handleFieldChange}
      />

      <button type="button" onClick={back}>
        Close
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.login.isLoading,
    isError: state.auth.login.isError,
  };
}
const mapDispatchToProps = {
  login: authOperations.login,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    {
      fields: {
        email: '',
        password: '',
      },
    },
    {
      handleFieldChange: (state) => (fieldName, value) => ({
        ...state,
        fields: {
          ...state.fields,
          [fieldName]: value,
        },
      }),
    },
  ),
  withHandlers({
    handleLogin: (props) => async () => {
      console.log(props.fields);
      await props.login(props.fields);
      if (Api.Auth.isLoggedIn) props.history.push(routes.home);
    },
  }),
);

export default function ModalGallery() {
  return (
    <Router>
      <Route  
      
      render={(props) => enhancer(<ModalSwitch {...props} isModal={true} />)}/>
    </Router>
  );
}
