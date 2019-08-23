# LAB - Class 03

## Data Modules

### Author: Joanna Arroyo

### Links and Resources
* [Submission PR](https://github.com/joanna-401-advanced-javascript/lab-04/pull/3)

#### Documentation
* [uuid/v4 Docs](https://www.uuidgenerator.net/version4)

### Modules
#### `memory.js`
##### Exported Values and Methods

###### `get() -> promise`
Gets a response from the database based on an id. 

###### `create() -> promise`
Gets id for entry, sanitizes the entry, then inserts into database.

###### `update() -> promise`
Sanitizes the entry, replaces the entry in the database with the same id, if it exists.

###### `delete() -> promise`
Deletes an entry from the database by overwriting the database to not include the entry.

###### `sanitize() -> boolean`
Validates that the entry has all required fields, and the entry has the correct type for the field.

#### `file.js`
##### Exported Values and Methods

###### `sanitize() -> boolean`
Validates that the entry has all required fields, and the entry has the correct type for the field.

### Setup
TBD

#### Running the app
TBD

#### Tests
* `npm run test`
* What assertions were made? TBD
* What assertions need to be / should be made? TBD