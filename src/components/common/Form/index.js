import React from "react";

import FormFields from "./Field";
import FormActions from "./Actions";

import './index.css';

const Form = ({ actions, submit, fields, setField }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormFields fields={fields} setField={setField} />
      <FormActions actions={actions} submit={submit} />
    </form>
  );
};

export default Form;
