import { useState } from "react";
import "./tabbedComponent.scss";

function TabbedButton({ num, activeTab, onClick, children }) {
  return (
    <button
      onClick={() => onClick(num)}
      className={`tab ${activeTab === num ? "active-tab" : ""}`}
    >
      {children}
    </button>
  );
}

function TabbedContent({ item }) {
  const { post, firm, firmLink, dateFrom, dateTo, workMode, duties } = item;
  return (
    <div className="content">
      <h3 className="content-title">
        {post} @ <a href={firmLink}>{firm}</a>
      </h3>
      <p className="content-date">
        {dateFrom} - {dateTo} <button>{workMode}</button>
      </p>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
}

function TabbedComponent({contents}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabbed-component">
      <div className="tabs">
        {contents.map((each, index) => (
          <TabbedButton
            key={index}
            num={index}
            activeTab={activeTab}
            onClick={setActiveTab}
          >
            {each.firm}
          </TabbedButton>
        ))}
      </div>
      <TabbedContent item={contents[activeTab]} />
    </div>
  );
}

export default TabbedComponent;
