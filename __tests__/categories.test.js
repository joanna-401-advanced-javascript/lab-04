'use strict';

const Categories = require('../categories/categories');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  })

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = categories.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(categories.sanitize(testRecord)).toBeUndefined();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };

    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(error => console.error('POST ERROR', error));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };

    return categories.create(obj)
      .then(record => categories.get(record._id))
      .then(category => {
        Object.keys(obj).forEach(key => {
          expect(category[0][key]).toEqual(obj[key]);
        });
      })
      .catch(error => console.error('GET ERROR', error));
  });

  it('can update() a category', () => {
    let obj = { name: 'Test Category' };
    let obj2 = { name: 'Update Category' };

    return categories.create(obj)
      .then(() => categories.create(obj2))
      .then(record => categories.update(record.id, obj2))
      .then(category => {
        Object.keys(obj2).forEach(key => {
          expect(category[key]).toEqual(obj2[key]);
        });
      })
      .catch(error => console.error('UPDATE ERROR', error));
  });

  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    let obj2 = { name: 'Test Category 2' };

    return categories.create(obj)
      .then(record => categories.create(obj2))
      .then(record => categories.delete(record.id))
      .then(() => {
        Object.keys(obj).forEach(key => {
          expect(categories.database[0][key]).toEqual(obj[key]);
          expect(categories.database.length).toEqual(1);
        });
      })
      .catch(error => console.error('DELETE ERROR', error));
  });
});