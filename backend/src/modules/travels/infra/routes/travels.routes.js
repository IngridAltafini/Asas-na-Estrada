const { Router } = require('express');
const multer = require('multer');

const TravelsController = require('../controllers/TravelsController');
const uploadConfig = require('../../../../config/upload');

const postTravels = require('../../middleware/validation.create');
const getTravels = require('../../middleware/validation.getOne');
const putTravels = require('../../middleware/validation.update');
const patchTravels = require('../../middleware/validation.updatePicture');
const deleteTravels = require('../../middleware/validation.delete');

const travelsRoutes = Router();
const travelsController = new TravelsController();

const upload = multer(uploadConfig);

travelsRoutes.post('/', postTravels(), travelsController.createTravels);

travelsRoutes.put('/:id', putTravels(), travelsController.updateTravels);

travelsRoutes.patch(
  '/:id/picture',
  patchTravels(),
  upload.single('picture'),
  travelsController.updateTravelsPicture
);

travelsRoutes.delete('/:id', deleteTravels(), travelsController.deleteTravels);

travelsRoutes.get('/', travelsController.getAllTravels);

travelsRoutes.get('/:id', getTravels(), travelsController.getOneTravels);

module.exports = travelsRoutes;
