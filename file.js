'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');

class Model {

  constructor() {

  }

  // get(fileName) {
  //   return fs.readFile(fileName);
  //   // return Promise.resolve(response);
  // }

  // get(id) {
  //   let response = id ? this.database.filter((record) => record.id === id) : this.database;
  //   return Promise.resolve(response);
  // }

  create(entry) {
    entry.id = uuid();
    let record = this.sanitize(entry);
    return fs.writeFile(record);
  }

  // create(entry) {
  //   entry.id = uuid();
  //   let record = this.sanitize(entry);
  //   if (record.id) { this.database.push(record); }
  //   return Promise.resolve(record);
  // }

  // update(id, entry) {
  //   let record = this.sanitize(entry);
  //   if (record.id) { this.database = this.database.map((item) => (item.id === id) ? record : item); }
  //   return Promise.resolve(record);
  // }
  //
  // delete(id) {
  //   this.database = this.database.filter((record) => record.id !== id);
  //   return Promise.resolve();
  // }

  sanitize(entry) {

    let valid = true;
    let record = {};

    Object.keys(this.schema).forEach(field => {
      if (this.schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      } else {
        record[field] = entry[field];
      }

      if(typeof entry[field] !== this.schema[field].type){
        valid = false;
      }
    });

    return valid ? record : undefined;
  }

  // readFile(fileName, callback){
  //   fs.readFile(fileName, (error, fileContents) => {
  //     if (error){
  //       callback(error);
  //     } else {
  //       callback(undefined, JSON.parse(fileContents.toString()));
  //     }
  //   })
  // }

  // writeFile(fileName, data, callback){
  //   let buffer = Buffer.from(JSON.stringify(data));
  //   fs.writeFile(fileName, buffer, (error, data) => {
  //     if (error){
  //       callback(error);
  //     } else {
  //       callback(undefined, data);
  //     }
  //   })
  // }

  // readFilePromises(fileName){
  //   return fsExtra.readFile(fileName);
  // }
  //
  // writeFilePromises(fileName, data){
  //   return fsExtra.writeFile(fileName, data);
  // }
}

module.exports = Model;
