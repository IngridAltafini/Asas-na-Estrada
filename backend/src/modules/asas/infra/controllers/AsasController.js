const AsasRepository = require('../../repositories/AsasRepository');

const CreateNewAsaService = require('../../service/CreateNewAsaService');
const GetAllAsaService = require('../../service/GetAllAsaService');
const GetOneAsaService = require('../../service/GetOneAsaService');
const UpdateAsaService = require('../../service/UpdateAsaService');
const UpdateAsasPictureService = require('../../service/UpdateAsasPictureService');
const DeleteAsaService = require('../../service/DeleteAsaService');

const asasRepository = new AsasRepository();

class AsasController {
  async createAsas(request, response) {
    const { model, color, travel, fabrication = false } = request.body;

    const createAsa = new CreateNewAsaService(asasRepository);

    const asa = await createAsa.execute({
      model,
      color,
      travel,
      fabrication,
    });

    return response.json(asa[0]);
  }

  async updateAsas(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };

    const updateAsa = new UpdateAsaService(asasRepository);

    const asaUpdated = await updateAsa.execute(payload);

    return response.json(asaUpdated);
  }

  async updateAsasPicture(request, response) {
    const updateAsaService = new UpdateAsasPictureService(asasRepository);

    const { id } = request.params;

    const updateAsaPicture = await updateAsaService.execute({
      id,
      fileName: request.file.filename,
    });

    return response.json(updateAsaPicture);
  }

  async deleteAsas(request, response) {
    const { id } = request.params;

    const deleteAsa = new DeleteAsaService(asasRepository);

    await deleteAsa.execute(id);

    return response.json({
      asa: {
        id,
        deleted: true,
      },
    });
  }

  async getAllAsas(request, response) {
    const getAll = new GetAllAsaService(asasRepository);

    const asas = await getAll.execute();

    return response.json(asas);
  }

  async getOneAsas(request, response) {
    const { id } = request.params;

    const getOne = new GetOneAsaService(asasRepository);

    const asa = await getOne.execute(id);

    return response.json(asa);
  }
}

module.exports = AsasController;
