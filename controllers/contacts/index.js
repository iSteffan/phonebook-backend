const listContacts = require('./listContacts');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const removeContact = require('./removeContact');
const { controllerWrapper } = require('../../helpers');

module.exports = {
  listContacts: controllerWrapper(listContacts),
  addContact: controllerWrapper(addContact),
  updateContact: controllerWrapper(updateContact),
  removeContact: controllerWrapper(removeContact),
};
