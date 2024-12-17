import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Dropdown.module.css";

const sampleOptions = [
  { label: "Germany", value: "de" },
  { label: "United States", value: "us" },
];

const Dropdown = ({ options = [], placeholder = "Select an option", dropdownAnchorSide = "left" }) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [highlightedIndex, setHighlightedIndex] = useState(0); // Highlighted option for keyboard navigation
  const [selectedOption, setSelectedOption] = useState(null); // Currently selected option
  const dropdownRef = useRef(null); // Reference to the dropdown container
  const toggleButtonRef = useRef(null); // Reference to the toggle button
  const searchInputRef = useRef(null); // Reference to the search input

  // Filter options based on search query
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown
  const closeDropdown = () => {
    setIsOpen(false);
    setSearchQuery("");
    setHighlightedIndex(0);
  };

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (!isOpen) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        setIsOpen(true);
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        event.preventDefault();
        break;
      case "ArrowUp":
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        event.preventDefault();
        break;
      case "Enter":
        if (filteredOptions[highlightedIndex]) {
          selectOption(filteredOptions[highlightedIndex]);
        }
        event.preventDefault();
        break;
      case "Escape":
        closeDropdown();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  // Select an option
  const selectOption = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  // Scroll the highlighted option into view
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const list = dropdownRef.current.querySelector(`.${styles.optionsList}`);
      const item = list.querySelectorAll(`.${styles.option}`)[highlightedIndex];
      if (item) {
        item.scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={styles.dropdownContainer}>
      <button
        type="button"
        className={styles.dropdownToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        ref={toggleButtonRef}
        onKeyDown={handleKeyDown}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <span className={styles.arrow}>{isOpen ? <>↑</> : <>↓</>}</span>
      </button>

      {isOpen && (
        <div
          className={styles.dropdownMenu}
          ref={dropdownRef}
          role="listbox"
          aria-activedescendant={
            filteredOptions[highlightedIndex]
              ? `option-${highlightedIndex}`
              : undefined
          }
          style={{
            left: dropdownAnchorSide === "right" ? "auto" : 0,
            right: dropdownAnchorSide === "right" ? 0 : "auto",
          }}
        >
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setHighlightedIndex(0);
            }}
            ref={searchInputRef}
            autoFocus
            aria-label="Search options"
            onKeyDown={handleKeyDown}
          />
          <ul className={styles.optionsList} tabIndex={-1}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  id={`option-${index}`}
                  role="option"
                  aria-selected={selectedOption?.value === option.value}
                  className={`${styles.option} ${
                    highlightedIndex === index ? styles.highlighted : ""
                  } ${
                    selectedOption?.value === option.value
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => selectOption(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {selectedOption?.value === option.value && "✔ "}{option.label}
                </li>
              ))
            ) : (
              <li className={styles.noOptions}>No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
