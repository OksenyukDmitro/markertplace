import React from 'react';
import Api from '../../api';
import s from './UploadImage.module.scss';
import { FormContext } from '../../components/Form/FormContainer/FormContainer';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: [],
      disabled: false,
      message: '',
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    const fd = new FormData();
    fd.append('image', this.state.file);
    const res = Api.Products.uploadImage(fd).then((res) => {
    
      this.props.photos.push(res.data);
    });
  }

  _handleImageChange(e, onChange) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        disabled: true,
        file: file,
        imagePreviewUrl: this.state.imagePreviewUrl.concat(
          reader.result,
        ),
        message: 'uploading',
      });
    };
    const fd = new FormData();
    fd.append('image', file);
    const res = Api.Products.uploadImage(fd).then((res) => {
   
      if (this.props.photos && this.props.photos.length < 5) {
        this.props.photos.push(res.data);
        this.setState({
          disabled: false,
          message: '',
        });
      } else {
        this.setState({
          disabled: true,
          message: 'max 6 photos',
        });
      }
    });
  
    onChange("photos", this.props.photos)
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <FormContext.Consumer>
        {({ onChange }) => {
          return (
            <div className="previewComponent">
              <form onSubmit={(e) => this._handleSubmit()}>
                <p className={s.label}>Photos</p>{' '}
                <div className={s.error}>{this.state.message}</div>
              </form>
              <div className={s.imgContainer}>
                <div className={s.imgPreview}>
                  <input
                    disabled={this.state.disabled}
                    className={
                      this.state.disabled
                        ? s.btnDisabled
                        : s.btnSelect
                    }
                    type="file"
                    onChange={(e) => this._handleImageChange(e, onChange)}
                  />
                </div>
                {this.state.imagePreviewUrl ? (
                  this.state.imagePreviewUrl.map((item) => (
                    <div className={s.imgPreview}>
                      <img src={item} className={s.img} />
                    </div>
                  ))
                ) : (
                  <div className="previewText">
                    Please select an Image for Preview
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </FormContext.Consumer>
    );
  }
}

export default ImageUpload;
