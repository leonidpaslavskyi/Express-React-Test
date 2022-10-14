import React from "react";
import termIcon from '../../assets/images/termicon.svg'
const Term = ({ data }) => {
  return (
    <div className="term__wrapper">
      {data.map((each, index) => {
        return <div className="term__elem" key={index}>
          <div className="term__double">
            <div className="el__term">
              <div className="term__left">
                <span>{ index + 1 }</span>
                <p><span className="term__approved">{ each.input }</span></p>
              </div>
              <div className="term__right">
                <div className="term__status">
                  <p>Approved</p>
                </div>
              </div>
            </div>

            <div className="el__term">
              <div className="term__left">
                <p><span className="term__approved">{ each.output }</span></p>
              </div>
              <div className="term__right">
                <div className="term__status">
                  <p>Approved</p>
                </div>
              </div>
            </div>
          </div>
          <div className="term__status">
            <div className="term__status--info">
              <img src={termIcon} alt="termicon" />
            </div>
          </div>
        </div>
      })}
    </div>
  );
};
export default Term;