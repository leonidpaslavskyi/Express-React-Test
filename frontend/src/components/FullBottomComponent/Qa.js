import React, { useState } from "react";
import badgeIcon from '../../assets/images/badgeicon.svg'
const Qa = ({ data }) => {
  const [qaList, setQaList] = useState(data)

  const handleQaList = (index) => {
    let tList = qaList
    tList[index].visible = !tList[index].visible
    setQaList(tList)
  }

  return (
    <div className="qa__block">
      {qaList.map((each, index) => {
        return <div className="elem__qa" key={index}>
          <div className="qa__info">
            <span><img src={badgeIcon} alt="badge" /></span>
            <p>{ each.content }</p>
          </div>
          <div className="qa__switcher">
            <span>Warning</span>
            <label className="switch">
              <input type="checkbox" checked={each.visible} onChange={() => handleQaList(index)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      })}
    </div>
  );
};
export default Qa;