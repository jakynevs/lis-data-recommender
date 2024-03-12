import React from 'react';
import { DropdownContainer, Select } from './DropdownStyles';

const Dropdown = ({ options, defaultValue, onChange }) => {
  return (
    <DropdownContainer>
      <Select defaultValue={defaultValue} onChange={onChange}>
      <option value="" disabled selected>Choose an option</option>
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
