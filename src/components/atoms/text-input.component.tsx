import { Dispatch, memo } from "react";
import './text-input.component.css'

interface props {
  isLarge?: boolean;
  name: string;
  label: string;
  value: string;
  onChange: Dispatch<any>;
};

const TextInput = memo(({ isLarge, name, label, value, onChange }: props) => {
  return isLarge ? (
    <div className="text-input">
      <label>{ label }</label>
      <textarea name={name} value={value} onChange={ e => onChange(e.target.value) } className="textbox-large"></textarea>
    </div>
  ) : (
    <div className="text-input">
      <label>{ label }</label>
      <input name={name} value={value} type="text" onChange={ e => onChange(e.target.value) } className="textbox-small" />
    </div>
  );
})

export default TextInput;