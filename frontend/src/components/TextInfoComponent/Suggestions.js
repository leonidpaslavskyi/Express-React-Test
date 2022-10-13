import React from "react";
const Suggestions = ({data, symbols}) => {
  return (
    <div className="suggestions">
      {data.map((each, index) => {
        return <div className="d-flex flex-row text-black border-top">
          <div className="d-flex flex-row flex-1 m-3 border-end">
            <span>{ index + 1 }</span>
            <span className="ps-3 flex-1 text-start">{ each.input }</span>
          </div>
          <div className="d-flex flex-row flex-1">
            <span className="p-3 flex-1 text-start">{ each.output }</span>
            <span className="p-3 bg-light-green border-mt">MT</span>
          </div>
        </div>
      })}
    </div>
  );
};
export default Suggestions;