import React from "react";

const LabeledInput = ({ labelId, inputId, changeEvent, label }) => {
  return (
    <div>
      <label id={labelId} for={inputId} tabindex="-1">
        {label}:
      </label>
      <span>
        <input
          type="text"
          name={inputId}
          id={inputId}
          aria-labelledby={labelId}
          onChange={e => changeEvent(e.target.value)}
        />
      </span>
    </div>
  );
};

export default LabeledInput;
