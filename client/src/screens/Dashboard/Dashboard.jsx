import Button from "../../components/Button/Button";
import Dialog from "../../components/Dialog/Dialog";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import Link from "../../components/Link/Link";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Switch from "../../components/Switch/Switch";
import Tooltip from "../../components/Tooltip/Tooltip";
import styles from "./Dashboard.module.css";

const Dashboard = ({}) => {
  return (
    <div className={styles.main}>
      {/* ↓ Delete below sample dialog */}
        <main className={styles.sampleDialog}>
          <h1>Genesis</h1>
          <h2>Dropdown</h2>
          <Dropdown
            options={[
              { label: "Germany", value: "de" },
              { label: "United States", value: "us" },
            ]}
          />
          <h2>Input</h2>
          <Input label="Test Input" placeholder="This is a placeholder"/>
          <h2>Button</h2>
          <Button>Hello World!</Button>
          <h2>Switch</h2>
          <Switch label={"Switch me on"}/>
          <h2>Link</h2>
          <Link>This is a link</Link>
          <h2>Loading Indicator</h2>
          <LoadingIndicator/>
          <h2>Tooltip</h2>
          <Tooltip tooltip="This is a tooltip">
            <Button>Hover over me</Button>
          </Tooltip>
        </main>

      {/* ↑ */}
    </div>
  );
};

export default Dashboard;
