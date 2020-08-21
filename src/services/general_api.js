import axios from "axios";

const general_api = (baseURL, route) => {
  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });

  const getAll = queryParams => {
    return api.get(route, { params: queryParams });
  };

  const get = (id, queryParams) => {
    return api.get(`${route}/${id}`, { params: queryParams });
  };

  const post = body => {
    return api.post(route, body);
  };

  const put = (id, body) => {
    const route = `${route}/${id}`;

    return api.put(route, body);
  };

  const remove = (id) => {
    const route = `${route}/${id}`;

    return api.delete(route);
  };

  return { getAll, get, post, put, remove };
}

export default general_api;
