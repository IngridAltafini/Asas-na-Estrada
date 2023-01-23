const TravelsRepository = require('../../repositories/TravelsRepository');

const CreateNewTravelService = require('../../service/CreateNewTravelService');
const GetAllTravelService = require('../../service/GetAllTravelService');
const GetOneTravelService = require('../../service/GetOneTravelService');
const UpdateTravelService = require('../../service/UpdateTravelService');
const UpdateTravelPictureService = require('../../service/UpdateTravelPictureService');
const DeleteTravelService = require('../../service/DeleteTravelService');

const travelsRepository = new TravelsRepository();

class TravelsController {
  async createTravels(request, response) {
    const { state, city, type, name, address, contact, description } =
      request.body;

    const createTravel = new CreateNewTravelService(travelsRepository);

    const travel = await createTravel.execute({
      state,
      city,
      type,
      name,
      address,
      contact,
      description,
    });

    return response.json(travel[0]);
  }

  async updateTravels(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };

    const updateTravel = new UpdateTravelService(travelsRepository);

    const travelUpdated = await updateTravel.execute(payload);

    return response.json(travelUpdated);
  }

  async updateTravelsPicture(request, response) {
    const updateTravelService = new UpdateTravelPictureService(
      travelsRepository
    );

    const { id } = request.params;

    const updateTravelPicture = await updateTravelService.execute({
      id,
      fileName: request.file.filename,
    });

    return response.json(updateTravelPicture);
  }

  async deleteTravels(request, response) {
    const { id } = request.params;

    const deleteTravel = new DeleteTravelService(travelsRepository);

    await deleteTravel.execute(id);

    return response.json({
      travel: {
        id,
        deleted: true,
      },
    });
  }

  async getAllTravels(request, response) {
    const getAll = new GetAllTravelService(travelsRepository);

    const travels = await getAll.execute();

    return response.json(travels);
  }

  async getOneTravels(request, response) {
    const { id } = request.params;

    const getOne = new GetOneTravelService(travelsRepository);

    const travel = await getOne.execute(id);

    return response.json(travel);
  }
}

module.exports = TravelsController;
