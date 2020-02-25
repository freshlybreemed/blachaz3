// Local dependencies
const { handleErrors } = require('../helpers/error');
const { contactSubmitApi } = require('../helpers/contact');
const { send } = require('micro');

const postApi = (fn) => async (req, res) => {
  try {
    const parse = req.url.split('/');
    switch (`api/${parse[2]}`) {
      case 'api/contact':
        return await fn(contactSubmitApi(req, res));
      default:
        return send(res, 200, { err: 'invalid route' });
    }
  } catch (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error(err);
    return send(res, statusCode, message);
  }
};

module.exports = postApi(handleErrors);
