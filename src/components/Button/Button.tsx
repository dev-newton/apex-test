import { MouseEvent } from "react";
import "./Button.scss";

type Props = {
  label: string;
  variant: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ label, variant, onClick }: Props) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
