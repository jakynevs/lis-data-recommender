    // Dropdown.js
import React from 'react';
import { DropdownContainer, Select } from './DropdownStyles';

const Dropdown = ({ options, defaultValue, onChange }) => {
  return (
    <DropdownContainer>
      <Select defaultValue={defaultValue} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default Dropdown;
