const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  postSessions() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required('email is required'),
        password: Joi.string().min(8).required('password is required'),
      }),
    });
  },

  postSessionsSocial() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        provider_id: Joi.string().required('provider is required'),
        name: Joi.string().required('name is required'),
        email: Joi.string().email().required('email is required'),
      }),
    });
  },
};
