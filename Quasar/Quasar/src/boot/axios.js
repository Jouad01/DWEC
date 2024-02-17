import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://34.90.153.139/ejercicios/veterinario/getanimals.php' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})


axios.interceptors.request.use(function (config) {
  // config.withCredentials = true
  // config.headers.Authorization = '12345678';
  Notify.create({
    type: 'positive',
    message: 'Haciendo request!!!'
  })
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error && error.response && error.response.status === 401) {
    Notify.create({
      type: 'negative',
      message: 'USUARIO NO AUTORIZADO!!!'
    })
  }
  return Promise.reject(error);
});



export { api, axios }
