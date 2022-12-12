import axios, { AxiosError } from 'axios'

export function setupAPIClient(ctx = undefined){

  const api = axios.create({
    baseURL: 'http://localhost:8000'
  })

  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
    if(error.response.status === 401){
      // qualquer erro 401 (nao autorizado) devemos deslogar o usuario
      
    }

   // return Promise.reject(error);

  })

  return api;

}