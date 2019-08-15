const Categories = require('../categories/categories.js');

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
      .catch(e => console.error('ERR', e));
  });

  // TODO: refactor this too so that it doesn't look like callbacks
  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
        //TODO: refactor here
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
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

  // TODO: refactor? Put two objects into an array and do forEach to create?
  // TODO: make this look more like mongo?
  // TODO: add another expect so it checks that the second obj is not in there?
  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    let obj2 = { name: 'Test Category 2'};
    return categories.create(obj)
      .then(record => {
        return categories.create(obj2)
          .then(record => {
            return categories.delete(record.id)
              .then(() => {
                Object.keys(obj).forEach(key => {
                  expect(categories.database[0][key]).toEqual(obj[key]);
                });
              })
          });
      })
      .catch(error => console.error('DELETE ERROR', error));
  });
});