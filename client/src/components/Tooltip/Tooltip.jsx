import React, { cloneElement, useRef, useId } from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({
  children,
  tooltip,
  position = "top",
  className = "",
  tooltipClassName = "",
  id,
}) => {
  const triggerRef = useRef(null);
  const uniqueId = useId();
  const tooltipId = id || `tooltip-${uniqueId}`;

  if (!tooltip) {
    return children;
  }

  const isReactElement = React.isValidElement(children);

  const triggerWithAria = isReactElement
    ? cloneElement(children, {
        "aria-describedby": tooltipId,
        ref: triggerRef,
      })
    : children;

  return (
    <div className={`${styles.tooltipContainer} ${className}`}>
      {triggerWithAria}
      <div
        id={tooltipId}
        role="tooltip"
        className={`${styles.tooltip} ${
          styles[`tooltip--${position}`]
        } ${tooltipClassName}`}
      >
        {tooltip}
      </div>
    </div>
  );
};

export default Tooltip;
