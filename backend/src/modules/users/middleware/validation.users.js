const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postUsers() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required('name is required'),
      email: Joi.string().email().required('email is required'),
      password: Joi.string().min(8).required('password is required'),
    }),
  });
};
