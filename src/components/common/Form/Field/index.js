import React from "react";

import Dropdown from "../../Dropdown";

import "./index.css";

const Field = ({ field, setField }) => {
  const className = field.fill ? "fill-column" : "";

  switch (field.type) {
    case "input":
      return <input {...field.params} className={className} onChange={setField} />;
    case "dropdown":
      return <Dropdown field={field} className={className} handleChange={setField} />;
    default:
      throw new Error("INVALID FIELD TYPE");
  }
};

const FormFields = ({ fields, setField }) => {
  return (
    <fieldset>
      <div className="fields">
        {fields.map(f => (
          <Field field={f} setField={setField} key={f.params.name} />
        ))}
      </div>
    </fieldset>
  );
};

export default FormFields;
