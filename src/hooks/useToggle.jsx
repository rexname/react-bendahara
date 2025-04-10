// src/hooks/useToggle.js
import { useState } from "react";

/**
 * Custom hook for toggle functionality
 * @param {boolean} initialState - Initial toggle state
 * @returns {[boolean, function]} - Current state and toggle function
 */
export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => setState(!state);

  return [state, toggle];
};
