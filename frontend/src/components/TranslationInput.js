import React, { useState } from "react"
import { Form } from "react-bootstrap";
import TranslationPopupMenu from "./TranslationPopupMenu";
const TranslationInput = ({data, active}) => {
  const [value, setValue] = useState(data)
  const onChange = (event) => setValue(event.target.value)

  return (
    <div className="d-flex flex-column flex-1 p-2">
      {active && <TranslationPopupMenu text={'English - United Kingdom'} />}
      <Form.Control
        className="form-textarea"
        as="textarea"
        rows={4}
        placeholder="Translation text"
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};
export default TranslationInput;