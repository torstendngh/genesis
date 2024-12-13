import styles from "./LoadingIndicator.module.css";

const LoadingIndicator = ({}) => {
  return (
    <div className={styles.main} role="alert" aria-busy="true" aria-live="polite">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <g className={styles.spinner}>
          <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
};

export default LoadingIndicator;
