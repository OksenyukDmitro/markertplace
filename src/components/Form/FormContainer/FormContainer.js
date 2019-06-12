import React from 'react';
import Api from '../../../api';

export const FormContext = React.createContext(null);

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: props.initialValue,
      errors: {},
    };
  }

  onChange = async (name, value) => {
    if (typeof value === 'string') {
      this.setState((state) => ({
        fields: {
          ...state.fields,
          [name]: value,
        },
      }));
    }

   
  };

  resetForm = () => {
    this.setState({
      fields: this.props.initialValue,
    });
  };

  onSubmit = () => {
    this.props.submit(this.state.fields);
    this.resetForm();
  };

  setErrors = (name, error) => {
    this.setState((state) => ({
      errors: {
        ...state.errors,
        [name]: error,
      },
    }));
  };

  getError = (name) => {
    return this.state.errors[name];
  };

  render() {
    const value = {
      formState: this.state.fields,
      onChange: (name, value) => this.onChange(name, value),
      onSubmit: this.onSubmit,
      setError: (name, error) => this.setErrors(name, error),
      getError: (name) => this.getError(name),
    };

    return (
      <FormContext.Provider value={value}>
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default FormContainer;