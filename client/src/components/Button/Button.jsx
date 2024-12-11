import styles from "./Button.module.css";

const Button = ({ children, variant = "", disabled = false, ...props }) => {
  return (
    <button
      role="button"
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
