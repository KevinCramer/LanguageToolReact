type CustomSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomSwitch = ({ checked, onChange }: CustomSwitchProps) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span></span>
    </label>
  );
}

export default CustomSwitch;