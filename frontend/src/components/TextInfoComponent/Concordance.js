import React from "react";
const Concordance = ({data, symbols}) => {
  return (
    <div className="concordance">
      {data.map((each, index) => {
        return <div className="d-flex flex-row text-black border-top">
          <div className="d-flex flex-row flex-1 m-3 pe-2 border-end">
            <span>{ index + 1 }</span>
            <span className="ps-3 text-start">{ each.input }</span>
          </div>
          <div className="d-flex flex-row flex-1">
            <span className="p-3 text-start">{ each.output }</span>
          </div>
        </div>
      })}
    </div>
  );
};
export default Concordance;