import React from "react";
const Symbols = ({ data }) => {
  return (
    <div className="symbols__wrapper">
      {data.map((each, index) => {
        return <div className="symbols__elem" key={index}>
          <div className="symbols__head">
            <span>{ each.category }</span>
          </div>
          <div className="symbols__container">
            {each.value.map((eachSymbol, sIndex) => {
              return <div className="el__symbol" key={sIndex}>
                <span>{ eachSymbol }</span>
              </div>
            })}
          </div>
        </div>
      })}
    </div>
  );
};
export default Symbols;