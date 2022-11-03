const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postSessionsSocial() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      provider_id: Joi.string().required('provider is required'),
      name: Joi.string().required('name is required'),
      email: Joi.string().email().required('email is required'),
      avatar: Joi.string(),
      password: Joi.string(),
    }),
  });
};
