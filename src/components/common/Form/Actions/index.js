import React from "react";

import "./index.css";

const Action = ({ action }) => {
  return (
    <button className="action" onClick={action.handleClick}>
      {action.name}
    </button>
  );
};

const FormActions = ({ actions, submit }) => {
  return (
    <div className="actions">
      <div>
        {actions.map(a => (
          <Action action={a} key={a.name} />
        ))}
      </div>
      <button className="submit" onClick={submit.handleClick}>
        {submit.name}
      </button>
    </div>
  );
};

export default FormActions;
