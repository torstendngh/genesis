import { useState } from "react";
import styles from "./TabSwitch.module.css";

const sampleData = [
  {
    id: 1,
    title: "Tab 1",
    titleContent: <>Tab 1</>
  },
  {
    id: 2,
    title: "Tab 2",
    titleContent: <>Tab 2</>
  }
]

const TabSwitch = ({data, onChange}) => {
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

export default TabSwitch;