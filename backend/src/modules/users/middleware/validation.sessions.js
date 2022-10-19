const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postSessions() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required('email is required'),
      password: Joi.string().min(8).required('password is required'),
    }),
  });
};
