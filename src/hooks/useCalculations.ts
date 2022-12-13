export enum CalcOp {
  add,
  sub,
  mul,
  div,
  sin,
  cos,
  pow,
  log2,
}

export default function useCalculations() {
  return (fn: CalcOp) => {
    switch (fn) {
      case CalcOp.add:
        return (x: number, y: number) => x + y;
      case CalcOp.sub:
        return (x: number, y: number) => x - y;
      case CalcOp.mul:
        return (x: number, y: number) => x * y;
      case CalcOp.div:
        return (x: number, y: number) => x / y;
      case CalcOp.sin:
        return (x: number, y: number) => Math.sin(x);
      case CalcOp.cos:
        return (x: number, y: number) => Math.cos(x);
      case CalcOp.pow:
        return (x: number, y: number) => Math.pow(x, y);
      case CalcOp.log2:
        return (x: number, y: number) => Math.log2(x);
    }
  };
}
