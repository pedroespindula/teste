import React from "react";

import "./index.css";

const Dropdown = ({ field, handleChange }) => {
  const select = value => {
    handleChange({ target: { value: value.name, name: field.params.name } });
  };

  return (
    <div>
      <h1>{field.params.value || field.params.placeholder}</h1>
      <ul>
        {field.params.values.map(v => (
          <li key={v.id} onClick={() => select(v)}>
            {v.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
