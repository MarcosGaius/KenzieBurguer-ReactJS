import { Button } from "./styles";

export default function MainButton({
  children,
  btnType,
  btnSize,
  onClick,
  onKeyDown,
}) {
  return (
    <Button
      btnType={btnType}
      btnSize={btnSize}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </Button>
  );
}
