import { useId, useRef } from "react";
import styles from "./Input.module.css";

const Input = ({
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  maxLength = null,
  type = "text",
  disabled = false,
  readOnly = false,
  autoFocus = false,
  required = false,
  errorMessage = "",
}) => {
  const id = useId();
  const inputRef = useRef(null);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    if (maxLength !== null && e.target.value.length > maxLength) {
      return;
    }
    onChange(e);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`${styles.inputContainer} ${
          errorMessage ? styles.error : ""
        }`}
        onClick={handleContainerClick}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          id={id}
          placeholder={placeholder || label}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          required={required}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? `${id}-error` : undefined}
        />
      </div>
      {maxLength !== null && (
        <div className={styles.charCounter}>
          {value.length}/{maxLength}
        </div>
      )}
      {errorMessage && (
        <div className={styles.errorMessage} id={`${id}-error`}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
