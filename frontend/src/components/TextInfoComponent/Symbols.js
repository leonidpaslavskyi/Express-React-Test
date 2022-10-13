import React from "react";
const Symbols = ({ data, symbols }) => {
  console.log(data)
  return (
    <div className="symbols border-top">
      <div className="d-flex flex-column align-items-start p-3 pb-0">
        <span className="text-secondary py-2"><small>Extended Latin</small></span>
        <span className="text-black ws-1">{data.extended_latin.join(' ')}</span>
      </div>
      <div className="d-flex flex-column align-items-start p-3 pb-0">
        <span className="text-secondary py-2"><small>Signs</small></span>
        <span className="text-black ws-1">{data.signs.join(' ')}</span>
      </div>
      <div className="d-flex flex-column align-items-start p-3">
        <span className="text-secondary py-2"><small>Currencies</small></span>
        <span className="text-black ws-1">{data.currencies.join(' ')}</span>
      </div>
    </div>
  );
};
export default Symbols;