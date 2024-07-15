import './MySwitch.css'; // Import your custom CSS file for styling
import React from 'react';

type CustomSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const MySwitch = ({ checked, onChange }: CustomSwitchProps) => {
  const handleChange = () => {
    onChange(!checked); // Toggle the checked state
  };

  return (
    <label className="custom-switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
}

export default MySwitch;