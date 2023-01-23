const { Router } = require('express');
const multer = require('multer');

const AsasController = require('../controllers/AsasController');
const uploadConfig = require('../../../../config/upload');

const postAsas = require('../../middleware/validation.create');
const getAsas = require('../../middleware/validation.getOne');
const putAsas = require('../../middleware/validation.update');
const patchAsas = require('../../middleware/validation.updatePicture');
const deleteAsas = require('../../middleware/validation.delete');

const asasRoutes = Router();
const asasController = new AsasController();

const upload = multer(uploadConfig);

asasRoutes.post('/', postAsas(), asasController.createAsas);

asasRoutes.put('/:id', putAsas(), asasController.updateAsas);

asasRoutes.patch(
  '/:id/picture',
  patchAsas(),
  upload.single('picture'),
  asasController.updateAsasPicture
);

asasRoutes.delete('/:id', deleteAsas(), asasController.deleteAsas);

asasRoutes.get('/', asasController.getAllAsas);

asasRoutes.get('/:id', getAsas(), asasController.getOneAsas);

module.exports = asasRoutes;
