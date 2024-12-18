import { useState } from "react";
import Button from "../../components/Button/Button";
import Dialog from "../../components/Dialog/Dialog";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import Link from "../../components/Link/Link";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Switch from "../../components/Switch/Switch";
import Tooltip from "../../components/Tooltip/Tooltip";
import styles from "./Dashboard.module.css";
import Tabs from "../../components/Tabs/Tabs";
import { AnimatePresence } from "framer-motion";

const Dashboard = ({}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className={styles.main}>
      {/* ↓ Delete below sample dialog */}
      <main className={styles.sampleDialog}>
        <h1>Genesis Client</h1>
        <h2>Dropdown</h2>
        <div className={styles.componentContainer}>
          <Dropdown
            options={[
              { label: "Germany", value: "de" },
              { label: "United States", value: "us" },
            ]}
          />
        </div>
        <h2>Input</h2>
        <div className={styles.componentContainer}>
          <Input label="Test Input" placeholder="This is a placeholder" />
        </div>
        <h2>Button</h2>
        <div className={styles.componentContainer}>
          <Button>Hello World!</Button>
        </div>
        <h2>Tabs</h2>
        <div className={styles.componentContainer}>
          <Tabs
            data={[
              {
                id: 1, // Unique ID for each tab
                title: "Tab 1", // Title of the tab when hovering
                titleContent: <>Tab 1</>, // Title of the tab like text and icon
              },
              {
                id: 2,
                title: "Tab 2",
                titleContent: <>Tab 2</>,
              },
              {
                id: 3,
                title: "Tab 3",
                titleContent: <>Tab 3</>,
              },
            ]}
          />
        </div>
        <h2>Switch</h2>
        <div className={styles.componentContainer}>
          <Switch label={"Switch me on"} />
        </div>
        <h2>Link</h2>
        <div className={styles.componentContainer}>
          <Link>This is a link</Link>
        </div>
        <h2>Loading Indicator</h2>
        <div className={styles.componentContainer}>
          <LoadingIndicator />
        </div>
        <h2>Tooltip</h2>
        <div className={styles.componentContainer}>
          <Tooltip tooltip="This is a tooltip">
            <Button>Hover over me</Button>
          </Tooltip>
        </div>
        <h2>Dialog</h2>
        <div className={styles.componentContainer}>
          <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
          <AnimatePresence>
            {isDialogOpen && (
              <Dialog onClose={() => setIsDialogOpen(false)}>
                <p>Dialog content goes here</p>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      </main>
      {/* ↑ */}
    </div>
  );
};

export default Dashboard;
