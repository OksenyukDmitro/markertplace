import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { routes } from '../router';
import { Input, Header, TextArea } from '../../components';
import LatestList from '../LatestList/LatestListContainer';
import s from './ModalAdd.module.scss';
import enhancer from './ModalAddContainer';
import ImageUpload from '../UploadImage/UploadImage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormContainer from '../../components/Form/FormContainer/FormContainer';
import FormInput from '../../components/Form/FormInput/FormInput';
import FormButton from '../../components/Form/FormButton/FormButton';
import FormTextArea from '../../components/Form/FormTextArea/FormTextArea';
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

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    const ismodal = this.props.history.action !== 'POP';
    console.log(ismodal);
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          {ismodal ? <LatestList /> : <Header />}
        </Switch>
        {isModal ? (
          <Route
            path={routes.addProducts}
            component={enhancer(ModalAdd)}
          />
        ) : (
          <Route
            path={routes.addProducts}
            component={enhancer(ModalAdd)}
          />
        )}
      </div>
    );
  }
}

function ModalAdd({
  history,
  handleAddProduct,
  handleFieldChange,
  titleError,
  locationError,
  priceError,
}) {
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  const fields = {
    title: '',
    location: '',
    description: '',
    price: '',
    photos: [],
  };
  const isModal = history.action !== 'POP';

  console.log(fields);
  function required(value) {
    if (value.trim().length === 0) return 'Is required';
    return undefined;
  }
  function isNumberRequired(value) {  
   
    if(isNaN(value))  {; return 'Price must be numbe'}
    return undefined;
  }
  return (
    <>
      <div className={isModal ? s.md : null}> </div>
      <div className={isModal ? s.modal : s.notModal}>
        <div className={s.container}>
          <p className={s.label}>Add product</p>
          <div className={s.inputContainer}>
            <FormContainer
              initialValue={fields}
              submit={handleAddProduct}
            >
              <FormInput
                className={s.input}
                validate={required}
                name="title"
                placeholder="For example: iron man suit"
                label="TITLE"
              />

              <FormInput
                className={s.input}
                name="location"
                validate={required}
                placeholder="For example: Los Angeles, CA"
                label="LOCATION"
              />
              <FormTextArea
                name="description"
                label="DESCRIPTION"
                validate={required}
              />
              <ImageUpload photos={fields.photos} />
              <FormInput
                className={s.input}
                name="price"
                validate={isNumberRequired}
                placeholder="For example: 111"
                label="PRICE"
              />
              <FormButton className={s.btn} />
            </FormContainer>
          </div>
        </div>
      </div>
    </>
  );
}
