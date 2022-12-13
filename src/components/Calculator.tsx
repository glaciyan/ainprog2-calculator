import styles from "./Calculator.module.less";
import { useEffect, useState } from "react";
import Button from "./Button";
import NumberInput from "./NumberInput";
import useCalculations, { CalcOp } from "../hooks/useCalculations";
import cn from "classnames"

export default function Calculator() {
  const [operatorX, setOperatorX] = useState(0);
  const [operatorY, setOperatorY] = useState(0);
  const [result, setResult] = useState(0);

  const [trigoMode, setTrigoMode] = useState("deg");

  const getCalc = useCalculations();

  const [currentOperation, setCurrentOperation] = useState(CalcOp.add);

  useEffect(() => {
    if (
      (currentOperation === CalcOp.cos || currentOperation === CalcOp.sin) &&
      trigoMode !== "deg"
    ) {
      setResult(getCalc(currentOperation)(operatorX * (Math.PI / 180), 0));
    } else {
      setResult(getCalc(currentOperation)(operatorX, operatorY));
    }
  }, [operatorX, operatorY, currentOperation, trigoMode]);

  const clear = () => {
    setOperatorX(0);
    setOperatorY(0);
  };

  const setSingleOperation = (op: CalcOp) => {
    setOperatorY(0);
    setCurrentOperation(op);
  };

  const handleRadioChange = (event: any) => {
    setTrigoMode(event.target.id);
  };

  const [brightTheme, setBrightTheme] = useState(false);

  const toggleCheckbox = () => {
    setBrightTheme(!brightTheme)
  };

  return (
    <form className={styles.container}>
      <div className={styles.containerValues}>
        <NumberInput
          id="opx"
          label="Operator X"
          placeholder="0"
          value={operatorX}
          setValue={setOperatorX}
          className={cn({"bright": brightTheme})}
        />
        <NumberInput
          id="opy"
          label="Operator Y"
          placeholder="0"
          value={operatorY}
          setValue={setOperatorY}
          className={cn({"bright": brightTheme})}
        />
        <NumberInput
          id="res"
          label="Resultat"
          placeholder="0"
          value={result}
          readOnly
          className={cn({"bright": brightTheme})}
        />
      </div>
      <div className={styles.containerOptions}>
        <fieldset
          className={styles.radDegFieldSet}
          onChange={handleRadioChange}
        >
          <input
            id="deg"
            type="radio"
            name="trigonometrieMode"
            defaultChecked={true}
          />
          <label htmlFor="deg">Deg</label>

          <input id="rad" type="radio" name="trigonometrieMode" />
          <label htmlFor="rad">Rad</label>
        </fieldset>
        <input id={"theme"} type={"checkbox"} checked={brightTheme} onChange={toggleCheckbox} />
        <label htmlFor={"theme"}>Helles Display</label>
      </div>
      <div className={styles.containerOperator}>
        <Button onClick={() => setCurrentOperation(CalcOp.add)}>+</Button>
        <Button onClick={() => setCurrentOperation(CalcOp.mul)}>*</Button>
        <Button onClick={() => setCurrentOperation(CalcOp.sub)}>-</Button>
        <Button onClick={() => setCurrentOperation(CalcOp.div)}>/</Button>
        <Button onClick={() => setSingleOperation(CalcOp.cos)}>cos</Button>
        <Button onClick={() => setSingleOperation(CalcOp.cos)}>sin</Button>
        <Button onClick={() => setCurrentOperation(CalcOp.pow)}>x^y</Button>
        <Button onClick={() => setSingleOperation(CalcOp.log2)}>log2</Button>
      </div>
      <div className={styles.containerClear}>
        <Button onClick={clear}>Clear</Button>
      </div>
    </form>
  );
}
