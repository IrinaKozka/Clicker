// export type DisplayProps = {
//   jakisProps: number;
//   x: string;
//   jakisProps2: string;
// };


export interface DisplayProps {
  count: number;
}

export interface ManipulatorProps {
  setCount: (value: number | ((prevState: number) => number)) => void;
}