import { useState } from "react";
import style from "./style.module.scss";

interface Props {
  defaulValue?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  range?: [number | null, number | null];
}

const CountButton = (props: Props) => {
  const { defaulValue = 0, disabled = false, range = [0, null] } = props;
  const [num, setNum] = useState(defaulValue);

  const handleIncrease = () => {
    const isAlowIncrease = range[1] === null || num + 1 <= range[1];

    if (isAlowIncrease && !disabled) {
      setNum(num + 1);
      props.onChange && props.onChange(num + 1);
    } else {
      props.onChange && props.onChange(num);
    }
  };

  const handleDecrease = () => {
    const isAlowDecrease = range[0] === null || num - 1 >= range[0];

    if (isAlowDecrease && !disabled) {
      setNum(num - 1);
      props.onChange && props.onChange(num - 1);
    } else {
      props.onChange && props.onChange(num);
    }
  };

  return (
    <div className={style.countButton}>
      <span onClick={() => handleDecrease()} className={style.add}>
        -
      </span>
      <span className={style.input}>
        <span className={style.valueInput}>{num}</span>
      </span>
      <span onClick={() => handleIncrease()} className={style.add}>
        +
      </span>
    </div>
  );
};

export default CountButton;
