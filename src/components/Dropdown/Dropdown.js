import React, { useState } from 'react';
import { DropdownContainer, Select } from './DropdownStyles';

const Dropdown = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };


  return (
    <DropdownContainer>
      <Select value={selectedValue} onChange={handleChange}>
      <option value="" disabled>Choose an option</option>
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
