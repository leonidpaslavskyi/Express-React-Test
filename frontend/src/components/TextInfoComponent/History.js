import React from "react";
const History = ({data, symbols}) => {
  return (
    <div className="history">
      {data.map((each, index) => {
        return <div className="d-flex flex-row text-black border-top">
          <div className="d-flex flex-row flex-1 m-3 border-end">
            <span className="line-height-3 pe-3">{index + 1}</span>
            <span className="p-3 rounded-circle bg-grey"> </span>
            <div className="d-flex flex-column flex-1 justify-content-between">
              <span className="ps-3 flex-1 text-start">{ each.text }</span>
              <span className="ps-3 text-start text-secondary pe-3"><small>{each.created_at}</small></span>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};
export default History;