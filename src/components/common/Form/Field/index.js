import React from "react";

import Dropdown from "../../Dropdown";

import './index.css';

const Field = ({ field, setField }) => {
  switch (field.type) {
    case "input":
      return <input {...field.params} onChange={setField} />;
    case "dropdown":
      return <Dropdown field={field} handleChange={setField} />;
    default:
      throw new Error("INVALID FIELD TYPE");
  }
};

const FormFields = ({ fields, setField }) => {
  return (
    <fieldset>
      {fields.map(f => (
        <Field field={f} setField={setField} key={f.params.name} />
      ))}
    </fieldset>
  );
};

export default FormFields;
