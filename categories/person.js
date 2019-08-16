'use strict';

const DataModel = require('../file');

class Persons extends DataModel {
  constructor(){
    super();
    this.schema = {
      id: {
        required: true,
        type: 'string',
      },
      name: {
        required: true,
        type: 'string',
      }
    };
  }
}

module.exports = Persons;