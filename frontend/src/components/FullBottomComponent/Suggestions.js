import React from "react";
const Suggestions = ({data}) => {
  return (
    <div className="suggestions__table">
      {data.map((each, index) => {
        return <div className="suggestion__elem" key={index}>
          <div className="suggestion__left">
            <div className="suggest__el">
              <span>{ index + 1 }</span>
              <p>{ each.input }</p>
            </div>
            <div className="suggest__el">
              <p>{ each.output }</p>
            </div>
          </div>
          <div className="suggestion__right">
            <div className="suggestion__info">
              <span>MT</span>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};
export default Suggestions;