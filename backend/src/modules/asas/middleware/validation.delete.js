const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function deleteAsas() {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required('id is required'),
    }),
  });
};
