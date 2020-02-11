import React from "react";

const LabeledInput = ({ labelId, inputId, changeEvent, label, reset }) => {
  return (
    <div>
      <label id={labelId} htmlFor={inputId}>
        {label}:
      </label>
      <span>
        <input
          type="text"
          name={inputId}
          id={inputId}
          aria-labelledby={labelId}
          onChange={e => {
            changeEvent(e.target.value);
            reset(false);
          }}
        />
      </span>
    </div>
  );
};

export default LabeledInput;
