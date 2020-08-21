import React from "react";

const Action = ({ action }) => {
  return (
    <button className="action" onClick={action.handleClick}>
      {action.name}
    </button>
  );
};

const FormActions = ({ actions, submit }) => {
  return (
    <div>
      {actions.map(a => (
        <Action action={a} key={a.name} />
      ))}
      <button onClick={submit.handleClick}>{submit.name}</button>
    </div>
  );
};

export default FormActions;
