const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  const { _id, name, number } = result;
  res.json({
    _id,
    name,
    number,
    // message: 'Delete success',
  });
};

module.exports = removeContact;
