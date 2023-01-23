const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postForgot() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required('email is required'),
    }),
  });
};
