import './CustomSwitch.css';
import React from 'react';

type CustomSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomSwitch = ({ checked, onChange }: CustomSwitchProps) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className="custom-switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
}

export default CustomSwitch;