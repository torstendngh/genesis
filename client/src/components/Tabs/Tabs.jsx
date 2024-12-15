import { useState } from "react";
import styles from "./Tabs.module.css";

const sampleData = [
  {
    id: 1, // Unique ID for each tab
    title: "Tab 1", // Title of the tab when hovering
    titleContent: <>Tab 1</> // Title of the tab like text and icon
  },
  {
    id: 2,
    title: "Tab 2",
    titleContent: <>Tab 2</>
  }
]

const Tabs = ({data, onChange}) => {
  const [activeTabId, setActiveTabId] = useState(data[0].id);
  const handleTabClick = (id) => {
    setActiveTabId(id)
    onChange(id)
  }
  return (
    <div className={styles.main}>
      {
        data.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTabId === tab.id ? styles.activeTab : ""}`}
            onClick={() => handleTabClick(tab.id)}
            title={tab.title}
          >
            {tab.titleContent}
          </button>
        ))
      }
    </div>
  );
};

export default Tabs;