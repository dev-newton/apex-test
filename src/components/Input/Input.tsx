import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Input.scss";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | null;
  icon?: ReactNode;
  loading?: boolean;
};

const Input = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { type, value, placeholder, required, onChange, icon, loading } = props;

  const PasswordIcon = passwordVisible ? AiFillEyeInvisible : AiFillEye;
  const passwordType =
    type === "password" && passwordVisible ? "text" : "password";

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="input">
      <input
        ref={inputRef}
        type={(type === "password" && passwordType) || "text"}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        required={required}
      />
      {type === "password" && (
        <PasswordIcon
          className="icon"
          fontSize={20}
          onClick={() => setPasswordVisible(!passwordVisible)}
        />
      )}
      {loading ? <span className="loader"></span> : icon}
    </div>
  );
};

export default Input;
