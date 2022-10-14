import React, { useState } from "react";
import Concordance from "./FullBottomComponent/Concordance";
import History from "./FullBottomComponent/History";
import Qa from "./FullBottomComponent/Qa";
import Suggestions from "./FullBottomComponent/Suggestions";
import Symbols from "./FullBottomComponent/Symbols";
import Term from "./FullBottomComponent/Term";
const TextInfo = ({ data, symbols }) => {
  const [activeTab, setActiveTab] = useState("");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="translate__suggestions">
        <ul>
          <li className={activeTab === "Suggestions" ? "active" : ""} onClick={() => handleTab('Suggestions')}><a href="" onClick={(e) => e.preventDefault()}>Suggestions <span>{ data.suggestions.length }</span></a></li>
          <li className={activeTab === "Term" ? "active" : ""} onClick={() => handleTab('Term')}><a href="" onClick={(e) => e.preventDefault()}>Term<span>{ data.term.length }</span></a></li>
          <li className={activeTab === "History" ? "active" : ""} onClick={() => handleTab('History')}><a href="" onClick={(e) => e.preventDefault()}>History<span>{ data.history.length }</span></a></li>
          <li className={activeTab === "Concordance" ? "active" : ""} onClick={() => handleTab('Concordance')}><a href="" onClick={(e) => e.preventDefault()}>Concordance</a></li>
          <li className={activeTab === "Symbols" ? "active" : ""} onClick={() => handleTab('Symbols')}><a href="" onClick={(e) => e.preventDefault()}>Symbols</a></li>
          <li className={activeTab === "Qa" ? "active" : ""} onClick={() => handleTab('Qa')}><a href="" onClick={(e) => e.preventDefault()}>Qa<span>{ data.qa.length }</span></a></li>
        </ul>
      </div>
      {(activeTab == 'Suggestions') && <Suggestions data={data.suggestions} />}
      {(activeTab == 'Term') && <Term data={data.term} />}
      {(activeTab == 'History') && <History data={data.history} />}
      {(activeTab == 'Concordance') && <Concordance data={data.concordance} />}
      {(activeTab == 'Symbols') && <Symbols data={symbols} />}
      {(activeTab == 'Qa') && <Qa data={data.qa} />}
    </>
  );
};
export default TextInfo;