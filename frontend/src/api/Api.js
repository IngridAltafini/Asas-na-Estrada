import { api } from '../shared/service';

const login = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });

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

export { login, createUsers, forgotPassword };
