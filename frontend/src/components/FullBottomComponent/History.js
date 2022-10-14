import React from "react";
import historyimage from '../../assets/images/historyimage.png'

const History = ({data}) => {
  return (
    <div className="history__wrapper">
      {data.map((each, index) => {
        return <div className="elem__history" key={index}>
        <div className="history__number">
          <span>{index + 1}</span>
        </div>
        <div className="history__info">
          <div className="history__image">
              <img src={historyimage} alt="historyimage" />
          </div>
          <div className="history__details">
            <p>{ each.text }</p>
            <span>{each.created_at}</span>
          </div>
        </div>
      </div>
      })}
    </div>
  );
};
export default History;