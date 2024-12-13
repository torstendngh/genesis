import { useEffect, useState } from "react";
import styles from "./Switch.module.css";

const Switch = ({ label, defaultValue = false, onToggle }) => {
  const [isOn, setIsOn] = useState(defaultValue);

  useEffect(() => {
    setIsOn(defaultValue);
  }, [defaultValue]);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <button className={styles.switchContainer} onClick={handleToggle}>
      <div className={`${styles.toggle} ${isOn ? styles.on : styles.off}`}>
        <div className={styles.switch}></div>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

export default Switch;
