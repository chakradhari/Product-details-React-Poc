import React, { Component } from 'react';

class ProductsComponent extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        product: ''
      }
    }

    updateDetails() {

    }

    addProduct() {

    }

    render() {
      return (
        <div>
          <h1>Products</h1>
          <h2>Add Products</h2>
          <div>
            <label>Name: </label>
            <input type="text" onChange={this.updateDetails} />
            <button type="button" onClick={this.addProduct}>Add Product</button>
          </div>
        </div>
      )
    }
}

export default ProductsComponent
