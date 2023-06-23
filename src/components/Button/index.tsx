import "./style.css";

interface ButtonPropsType {
  text: string;
  variant?: "primary" | "outline" | "text";
  color?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  disabledShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
}

const Button = ({
  text,
  variant = "primary",
  disabled = false,
  color = "default",
  size = "md",
  disabledShadow = false,
  startIcon,
  endIcon,
  ...props
}: ButtonPropsType): JSX.Element => (
  <button
    {...props}
    className="button"
    disabled={disabled}
    data-type={variant}
    data-color={color}
    data-size={size}
    data-disabled-shadow={disabledShadow}
  >
    {startIcon && (
      <span className="material-symbols-outlined mr-2">{startIcon}</span>
    )}
    <p className="button-text">{text}</p>
    {endIcon && (
      <span className="material-symbols-outlined ml-2">{endIcon}</span>
    )}
  </button>
);

export default Button;
