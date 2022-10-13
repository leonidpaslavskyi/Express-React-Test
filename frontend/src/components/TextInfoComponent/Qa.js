import React from "react";
import Form from 'react-bootstrap/Form';
import badgeIcon from '../../assets/images/badgeicon.svg'
const Qa = ({ data, symbols }) => {
  return (
    <div className="qa">
      {data.map((each, index) => {
        return <div className="d-flex flex-row text-black border-top justify-content-between" key={index}>
          <div>
            <div className="d-flex flex-row flex-1 m-3">
              <span><img src={badgeIcon}  /></span>
              <span className="ps-3 flex-1 text-start">{ each.content }</span>
            </div>
          </div>
          <div>
            <div className="d-flex flex-row flex-1 m-3">
              <span className="text-secondary pe-3"><small>Warning</small></span>
              <Form.Check 
                type="switch"
                id="custom-switch"
                checked={each.visible}
                onChange={() => {}}
                label=""
              />
            </div>
          </div>
        </div>
      })}
    </div>
  );
};
export default Qa;