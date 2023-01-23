const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function patchReset() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      password: Joi.string().min(4).required('Password is required'),

      [Segments.PARAMS]: Joi.object().keys({
        token: Joi.string().min(4).required('Token is required'),
      }),
    }),
  });
};
