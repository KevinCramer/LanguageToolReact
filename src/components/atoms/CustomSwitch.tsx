type CustomSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const CustomSwitch = ({ checked, onChange }: CustomSwitchProps) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      aria-label="Toggle switch"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only peer"
      />
      <div
        className={`w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 transition-colors`}
      ></div>
      <div
        className={`absolute   w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-5`}
      ></div>
    </label>
  );
};

export default CustomSwitch;
