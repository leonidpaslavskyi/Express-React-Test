import React from "react";
import termIcon from '../../assets/images/termicon.svg'
const Term = ({data, symbols}) => {
  return (
    <div className="term">
      {data.map((each, index) => {
        return <div className="d-flex flex-row text-black border-top">
          <div className="d-flex flex-row flex-1 m-3 border-end">
            <span>{ index + 1 }</span>
            <div className="d-flex flex-row flex-1 justify-content-between">
              <span className="ps-3 flex-1 text-start">{ each.input }</span>
              <span className="ps-3 text-start text-secondary pe-3">Approved</span>
            </div>
          </div>
          <div className="d-flex flex-row flex-1">
            <div className="d-flex flex-row flex-1 justify-content-between p-3">
              <span className="flex-1 text-start">{ each.output }</span>
              <span className="text-start text-secondary">Approved</span>
            </div>
            <span className="p-3 bg-light-green border-mt"><img src={termIcon}  /></span>
          </div>
        </div>
      })}
    </div>
  );
};
export default Term;