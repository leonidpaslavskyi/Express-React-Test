import React from "react";
import closeIcon from '../../assets/images/closeicon.svg'

const Concordance = ({data}) => {
  return (
    <div className="concordance__wrapper">
      <form action="">
        <div className="concordance__search">
          <input type="text" placeholder="Source" />
          <input type="submit" value="" />
          <a href="" onClick={(e) => e.preventDefault()}>
            <img src={closeIcon} alt="closeicon" />
          </a>
        </div>
        <div className="concordance__container">
          {data.map((each, index) => {
            return <div className="concordance__elem" key={index}>
              <div className="el__half">
                <span>{ index + 1 }</span>
                <p>{ each.input }</p>
              </div>
              <div className="el__half">
                <p>{ each.output }</p>
              </div>
            </div>
          })}
        </div>
      </form>
    </div>
  );
};
export default Concordance;