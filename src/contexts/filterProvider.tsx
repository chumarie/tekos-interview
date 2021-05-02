import PropTypes from "prop-types";
import React, { useState, ReactNode } from "react";

const FilterContext = React.createContext({
  isFilterDisplay: false,
  updateFilterDisplay: () => {},
});

const { Provider } = FilterContext;

interface Props {
  children: ReactNode;
}

function FilterProvider({ children }: Props) {
  const [isFilterDisplay, setIsFilterDisplay] = useState(false);

  const updateFilterDisplay = () => setIsFilterDisplay(!isFilterDisplay);

  const contextValue = {
    isFilterDisplay,
    updateFilterDisplay,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}

FilterProvider.propTypes = {
  children: PropTypes.node,
};

export { FilterProvider, FilterContext };
