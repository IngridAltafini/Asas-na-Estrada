import { api } from '../shared/service';

const login = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const loginSocial = async ({ email, name, provider_id }) => {
  console.log(email, name, provider_id);
  try {
    const response = await api.post('/login/social', {
      email,
      name,
      provider_id,
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createUsers = async payload => {
  try {
    const response = await api.post('/users', payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editUsers = async payload => {
  try {
    const response = await api.put(`/users/${payload.id}`, payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

//aqui vc recebe o data
const updateAvatarUsers = async (data, userId) => {
  try {
    const response = await api.patch(`/users/${userId}/avatar`, data);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUsersOne = async id => {
  try {
    const response = await api.get(`/users/${id}`);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const forgotPassword = async email => {
  try {
    const response = await api.post('/forgot', {
      email,
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const resetPassword = async ({ token, password }) => {
  try {
    const response = await api.patch(`/reset/${token}`, {
      password,
    });

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAsas = async () => {
  try {
    const response = await api.get('/asas');

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAsasDetails = async id => {
  try {
    const response = await api.get(`/asas/${id}`);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createAsas = async payload => {
  try {
    const response = await api.post('/asas', payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editAsas = async payload => {
  try {
    const response = await api.put(`/asas/${payload.id}`, payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteAsas = async asaId => {
  try {
    const response = await api.delete(`/asas/${asaId}`);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateAvatarAsas = async ({ id, data }) => {
  try {
    const response = await api.patch(`/asas/${id}/picture`, data);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTravels = async () => {
  try {
    const response = await api.get('/travels');

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getTravelsDetails = async id => {
  try {
    const response = await api.get(`/travels/${id}`);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createTravels = async payload => {
  try {
    const response = await api.post('/travels', payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const editTravels = async payload => {
  try {
    const response = await api.put(`/travels/${payload.id}`, payload);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteTravels = async travelId => {
  try {
    const response = await api.delete(`/travels/${travelId}`);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateAvatarTravels = async ({ id, data }) => {
  try {
    const response = await api.patch(`/travels/${id}/picture`, data);

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export {
  login,
  loginSocial,
  createUsers,
  forgotPassword,
  resetPassword,
  getAsas,
  getAsasDetails,
  createAsas,
  editAsas,
  deleteAsas,
  updateAvatarAsas,
  getTravels,
  getTravelsDetails,
  createTravels,
  editTravels,
  deleteTravels,
  updateAvatarTravels,
  updateAvatarUsers,
  editUsers,
  getUsersOne,
};
