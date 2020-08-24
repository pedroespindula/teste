const BRANDS = [
  {
    id: 1,
    name: "VW"
  },
  {
    id: 2,
    name: "Chevrolet"
  },
  {
    id: 3,
    name: "FIAT"
  },
  {
    id: 4,
    name: "Ford"
  },
  {
    id: 5,
    name: "Nissan"
  },
  {
    id: 6,
    name: "Mitsubishi"
  }
];

const CARS = [
  {
    id: 1,
    title: "Celta Azul 2005 Ar e Direção",
    model: "Celta",
    brand: "Chevrolet",
    year: 2005,
    color: "Azul marinho",
    km: 106041,
    price: 11772.22
  },
  {
    id: 2,
    title: "Celta Preto 2003",
    model: "Celta",
    brand: "Chevrolet",
    year: 2005,
    color: "Preta",
    km: 209022,
    price: 8762.22
  }
];

export const brandApi = {
  getAll: function () {
    return Promise.resolve({ data: BRANDS });
  }
};

export const carApi = {
  getAll: function (queryParams) {
    const params = new URLSearchParams(queryParams);

    const search = params.get("search");

    const result = search
      ? CARS.filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
      : CARS;

    return Promise.resolve({ data: result });
  },
  get: function (id) {
    return Promise.resolve({ data: CARS[id - 1] });
  },
  post: function (car) {
    return Promise.resolve({ data: car });
  },
  remove: function (id) {
    return Promise.resolve({ data: CARS[id] });
  }
};

export default { brandApi, carApi };
