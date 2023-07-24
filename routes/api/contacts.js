const express = require('express');

const controller = require('../../controllers/contacts');

const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, controller.listContacts);

router.post('/', controller.addContact);

router.put('/:id', isValidId, controller.updateContact);

router.delete('/:id', isValidId, controller.removeContact);

module.exports = router;
