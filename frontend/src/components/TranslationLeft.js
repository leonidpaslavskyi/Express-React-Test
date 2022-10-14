import React, { useState } from "react"
import { Form } from "react-bootstrap";
import TranslationPopupMenu from "./TranslationPopupMenu";
const TranslationInput = ({data, active, index}) => {
  return (
    <>
      <div className="full__left--left">
        {active && <TranslationPopupMenu text={'English - United Kingdom'} index={index} />}
        
        <div className="translation__text">
          <p contentEditable="true" suppressContentEditableWarning="true">{ data }</p>
        </div>
      </div>
    </>
  );
};
export default TranslationInput;