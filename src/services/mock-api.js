const brands = [
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

const vehicles = {
  cars: [
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
  ]
};

const api = {
  status: function () {
    return {
      online: true
    };
  },
  getBrands: function (pesquisa) {
    if (pesquisa) {
      return brands.filter(b => b.name.toLowerCase().contains(pesquisa));
    }

    return { brands };
  },
  getVehicles: function (pesquisa) {
    if (pesquisa) {
      const filteredCars = vehicles.car.filter(v => v.name.toLowerCase().contains(pesquisa));

      return { "car": filteredCars };
    }

    return vehicles;
  },
  createVehicle: function (vehicle) {
    const newVehicle = { ...vehicle.car, id: vehicles.length + 1 };

    vehicles.car.push(newVehicle);

    return { car: { ...newVehicle } };
  },
  editVehicle: function (id, vehicle) {
    return {
      car: {
        ...vehicle,
        id,
      }
    };
  },
  removeVehicle: function (id, vehicle) {
    return {
      car: {
        ...vehicle,
        id,
      }
    };
  }
};

export default api;
