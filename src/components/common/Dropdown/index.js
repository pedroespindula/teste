import React from "react";

import "./index.css";

const Dropdown = ({ field, handleChange, className }) => {
  return (
    <select {...field.params} className={className} onChange={handleChange}>
        {field.params.values.map(v => (
          <option key={v.id} value={v.name}>
            {v.name}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
