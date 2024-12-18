import Sample from "../Sample/Sample";
import styles from "./Dashboard.module.css";

const Dashboard = ({}) => {
  return (
    <div className={styles.main}>
        {/* Sample shows all the Genesis Components, delete if you want */}
        <Sample/>
    </div>
  );
};

export default Dashboard;