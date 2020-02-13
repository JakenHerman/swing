import React from "react";
import { TextInputField } from 'evergreen-ui';

const LabeledInput = ({ labelId, inputId, changeEvent, label, reset }) => {
  return (
    <div>
      <TextInputField
        label={label}
        type="text"
        name={inputId}
        id={inputId}
        aria-labelledby={labelId}
        onChange={e => {
          changeEvent(e.target.value);
          reset(false);
        }}
      />
    </div>
  );
};

export default LabeledInput;
