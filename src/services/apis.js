import general_api from './general_api'

const API_URL = process.env.REACT_APP_API_URL;

const ROUTES = {
  CARS: "/cars",
  BRANDS: "/brands"
};

const brandApi = general_api(API_URL, ROUTES.BRANDS);

const carApi = general_api(API_URL, ROUTES.BRANDS);

export default { brandApi, carApi }

