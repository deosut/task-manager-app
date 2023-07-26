import React from "react";

import styles from "./index.module.scss";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div className={styles.wrapper}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
