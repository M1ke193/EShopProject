import style from "./style.module.scss";

interface Props {
  className?: string;
  onclick?: (...args: any[]) => void;
}

const CloseButton = (props: Props) => {
  const { className = "" } = props;
  return (
    <span
      onClick={props.onclick}
      className={`${style.CloseButton} ${className}`}
    >
      <i className="fa-solid fa-xmark"></i>
    </span>
  );
};

export default CloseButton;
