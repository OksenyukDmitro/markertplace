/*import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { routes } from '../router';
import { Input, Header } from '../../components';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { authOperations } from '../../modules/auth';
import Api from '../../api';
import LatestList from '../LatestList/LatestListContainer';
import s from './ModalAdd.module.scss'

export default class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    location.state.modal = false;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
     
    }
  }

  render() {
    let { location } = this.props;
    console.log( [ location.state ,
      location.state.modal ,
      this.previousLocation !== location,
    location, this.previousLocation]);
    let isModal = !!(
      location.state &&
      location.state.modal &&(
      this.previousLocation !== location)
    ); // not initial render
      console.log(isModal);
      console.log(this.props.pathname);
      
     
    return (
      <div>
        <Header/>
        <Switch location={isModal ? this.previousLocation : location}>
        <Route exact path={routes.products} component={Home} />
         
       
        {isModal ? (
         

         <LatestList/>
       ) :null}
        </Switch>
        {isModal ? (
         

          <Route
            path={routes.addProducts}
            component={enhancer(ModalAdd)}
          />
        ) :<Route
        path={routes.addProducts}
        component={enhancer(ModalAdd)}
      />}
      </div>
    );
  }
}

function Add({
  history,
  fields,
  handleFieldChange,
}) {
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  console.log('notModal');

  return (
    <div className={s.container}>
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
function Home() {
  return (
    <div>
     
      <Redirect
        to={{
          pathname: routes.addProducts,
          // this is the trick!
          state: { modal: true },
        }}
      />     
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

function ModalAdd({
  history,
  fields,
  
  handleFieldChange,
  ...props
}) {
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  console.log("props.location.modal");
  console.log(props.location.modal);
  console.log(props.isModal);
  console.log(props.pathname);

  return (
    <div className={s.modal}
    >
      <div
       
       className={s.container}
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


function ModalGallery() {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
}

//ModalGallery;
*/