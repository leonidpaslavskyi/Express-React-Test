import React, { useState } from "react";
import Concordance from "./TextInfoComponent/Concordance";
import History from "./TextInfoComponent/History";
import Qa from "./TextInfoComponent/Qa";
import Suggestions from "./TextInfoComponent/Suggestions";
import Symbols from "./TextInfoComponent/Symbols";
import Term from "./TextInfoComponent/Term";
const TextInfo = ({ data, symbols }) => {
  const [activeTab, setActiveTab] = useState("");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="text-info">
      <ul className="nav">
        <li className={activeTab === "Suggestions" ? "active" : ""} onClick={() => handleTab('Suggestions')}>Suggestions <span className="circle-text">{ data.suggestions.length }</span></li>
        <li className={activeTab === "Term" ? "active" : ""} onClick={() => handleTab('Term')}>Term<span className="circle-text">{ data.term.length }</span></li>
        <li className={activeTab === "History" ? "active" : ""} onClick={() => handleTab('History')}>History<span className="circle-text">{ data.history.length }</span></li>
        <li className={activeTab === "Concordance" ? "active" : ""} onClick={() => handleTab('Concordance')}>Concordance</li>
        <li className={activeTab === "Symbols" ? "active" : ""} onClick={() => handleTab('Symbols')}>Symbols</li>
        <li className={activeTab === "Qa" ? "active" : ""} onClick={() => handleTab('Qa')}>Qa<span className="circle-text">{ data.qa.length }</span></li>
      </ul>
      <div className="outlet">
        {(activeTab == 'Suggestions') && <Suggestions symbols={symbols} data={data.suggestions} />}
        {(activeTab == 'Term') && <Term symbols={symbols} data={data.term} />}
        {(activeTab == 'History') && <History symbols={symbols} data={data.history} />}
        {(activeTab == 'Concordance') && <Concordance symbols={symbols} data={data.concordance} />}
        {(activeTab == 'Symbols') && <Symbols symbols={symbols} data={symbols} />}
        {(activeTab == 'Qa') && <Qa symbols={symbols} data={data.qa} />}
      </div>
    </div>
  );
};
export default TextInfo;