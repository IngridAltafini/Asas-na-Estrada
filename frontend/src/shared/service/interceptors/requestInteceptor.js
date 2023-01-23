import { environment } from '../../environment';

export const requestInterceptor = request => {
  const app = JSON.parse(localStorage.getItem(environment.APP_NAME));

  if (app && request.headers) {
    request.headers.Authorization = `Bearer ${app.token}`;
  }
  return request;
};
