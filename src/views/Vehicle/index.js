import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Form from "../../components/common/Form";

import { brandApi, carApi } from "../../services/mock-apis";

const Vehicle = ({ match }) => {
  const history = useHistory();
  const [brands, setBrands] = useState([]);
  const [fieldsValues, setFieldValue] = useState({
    title: "",
    model: "",
    year: undefined,
    brand: "",
    color: "",
    price: undefined,
    km: undefined
  });

  const updateBrands = async () => {
    const response = await brandApi.getAll();

    setBrands(response.data);
  };

  const updateVehicle = async id => {
    const response = await carApi.get(id);

    setFieldValue(response.data);
  };

  const isNotCreationThenCall = async callback => {
    if (match.params.id) {
      await callback();
    }
  };

  useEffect(() => {
    updateBrands();

    isNotCreationThenCall(() => updateVehicle(match.params.id));
  }, []);

  const save = async e => {
    e.preventDefault();

    await carApi.post(fieldsValues);
    history.push("/vehicle");
  };

  const remove = async e => {
    e.preventDefault();

    isNotCreationThenCall(async () => await carApi.remove(match.params.id));
    history.push("/vehicle");
  };

  const cancel = async e => {
    e.preventDefault();

    history.push("/vehicle");
  };

  const actions = [
    { name: "Remover", handleClick: remove },
    { name: "Cancelar", handleClick: cancel }
  ];

  const submit = {
    name: "Salvar",
    handleClick: save
  };

  const fields = [
    {
      type: "input",
      params: {
        placeholder: "Título",
        name: "title",
        value: fieldsValues.title
      }
    },
    {
      type: "input",
      params: {
        placeholder: "Modelo",
        name: "model",
        value: fieldsValues.model
      }
    },
    {
      type: "input",
      params: {
        placeholder: "Ano",
        type: "number",
        name: "year",
        value: fieldsValues.year
      }
    },
    {
      type: "dropdown",
      params: {
        values: brands,
        name: "brand",
        placeholder: "Marca",
        value: fieldsValues.brand
      }
    },
    {
      type: "input",
      params: { placeholder: "Cor", name: "color", value: fieldsValues.color }
    },
    {
      type: "input",
      params: {
        placeholder: "Preço",
        type: "number",
        name: "price",
        value: fieldsValues.price
      }
    },
    {
      type: "input",
      params: {
        placeholder: "Kilometragem",
        type: "number",
        name: "km",
        value: fieldsValues.km
      }
    }
  ];

  const setField = e => {
    const { name, value } = e.target;
    setFieldValue({ ...fieldsValues, [name]: value });
  };

  return (
    <Form
      actions={actions}
      submit={submit}
      fieldsValues={fieldsValues}
      fields={fields}
      setField={setField}
    />
  );
};

export default Vehicle;
