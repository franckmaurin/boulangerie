import React             from 'react';
import { connect }       from 'react-redux';
import { createProduct } from '../../actions';
import styles            from './styles.css';

class CreateForm extends React.Component {
  render() {
    let fields = {
      title: {},
      cover: {},
      price: {}
    };

    let onSubmit = (e) => {
      e.preventDefault();
      // detect empty fields and display error(s).
      let errorLength = 0;
      for (var name in fields) {
        if (fields.hasOwnProperty(name)) {
          if (!fields[name].input.value.trim() || (name==='cover' && fields.cover.input.files && !fields.cover.input.files[0].type.match('image.*'))) {
            fields[name].item.className = 'form-item form-item--'+name+' form-item--error';
            errorLength += 1;
          } else {
            fields[name].item.className = 'form-item form-item--'+name;
          }
        }
      }
      if(errorLength) {
        this.refs.createForm.className = "createForm createForm--error";
        return;
      }
      // if not, dispatch action CREATE_PRODUCT and reset the form
      this.props.dispatch(createProduct({
        title: fields.title.input.value,
        price: +fields.price.input.value,
        cover: fields.cover.input.files[0]
      }));
      for (var name in fields) {
        if (fields.hasOwnProperty(name)) {
          fields[name].input.value = '';
          fields[name].item.className = 'form-item form-item--'+name;
        }
      }
      this.refs.createForm.className = "createForm createForm--valid";
    };

    return (
      <section ref="createForm" className="createForm">
        <div className="inner">
          <h2 className="createForm-title typo-title">Create a Product</h2>
          <p className="createForm-msg createForm-msg--valid">Product created with success.</p>
          <p className="createForm-msg createForm-msg--error">Wow, something is wrong. Please don't forget to fill all fields.</p>
          <form className="form" onSubmit={onSubmit}>
            <fieldset>
              <div ref={node => {fields.title.item = node}} className="form-item form-item--title">
                <label>Title</label>
                <div className="form-input">
                  <input ref={node => {fields.title.input = node}} name="title" type="text" placeholder="Title" />
                </div>
              </div>
              <div ref={node => {fields.cover.item = node}} className="form-item form-item--cover">
                <label>Cover</label>
                <div className="form-input">
                  <input ref={node => {fields.cover.input = node}} name="cover" type="file" placeholder="File" />
                </div>
              </div>
              <div ref={node => {fields.price.item = node}} className="form-item form-item--price">
                <label>Price</label>
                <div className="form-prepend">$</div>
                <div className="form-input">
                  <input ref={node => {fields.price.input = node}} name="price" type="number" step="any" />
                </div>
              </div>
              <div className="form-item form-item--submit">
                <div className="form-input">
                  <button className="typo-btn" type="submit"><span>Create</span></button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}

CreateForm = connect()(CreateForm);
export default CreateForm;