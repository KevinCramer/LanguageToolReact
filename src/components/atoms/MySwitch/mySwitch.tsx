import React from 'react';
import './mySwitch.css'; // Import your custom CSS file for styling

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