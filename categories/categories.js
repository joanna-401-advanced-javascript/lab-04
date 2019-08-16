'use strict';

const DataModel = require('../memory');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: {
        required: true,
        type: 'string'},
      name: {
        required: true,
        type: 'string'},
    };
  }
}

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      category_id: { required: true, type: 'string'},
      price: { type: 'number'},
      weight: { type: 'number'},
      quantity_in_stock: { type: 'number'}
    }
  }
}

module.exports = Categories, Products;
