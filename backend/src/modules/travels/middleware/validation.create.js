const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postTravels() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      state: Joi.string().required('model is required'),
      city: Joi.string().required('color is required'),
      type: Joi.string().required('color is required'),
      name: Joi.string().required('color is required'),
      address: Joi.string().required('color is required'),
      contact: Joi.string().required('fabrication is required'),
      description: Joi.string().required('color is required'),
    }),
  });
};
