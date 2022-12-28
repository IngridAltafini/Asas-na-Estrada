import axios from 'axios';
import { environment } from '../environment';

import { requestInterceptor } from './interceptors/requestInteceptor';

const api = axios.create({
  baseURL: environment.API_URL,
});

api.interceptors.request.use(request => requestInterceptor(request));

export { api };
