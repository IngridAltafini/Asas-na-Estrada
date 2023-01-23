const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postAsas() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      model: Joi.string().required('model is required'),
      color: Joi.string().required('color is required'),
      fabrication: Joi.number().required('fabrication is required'),
      travel: Joi.boolean(),
    }),
  });
};
