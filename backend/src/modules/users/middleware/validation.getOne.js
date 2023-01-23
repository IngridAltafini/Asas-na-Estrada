const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function getUsers() {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required('id is required'),
    }),
  });
};
