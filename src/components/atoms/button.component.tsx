import { memo } from "react";
import './button.component.css'

interface props {
  onClick: any,
  children: string
};

const Button = memo(({ onClick, children }: props) => {
  return (
    <button className="button" onClick={onClick}>
        { children }
    </button>
  );
})

export default Button;