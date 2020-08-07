/**
 * Progress Component.
 */

type Props = {
  current: number,
  total: number
}

const Progress = ({ current, total }: Props) => {
  return (
    <div id="progress"> { current + 1 } / { total }</div>
  );
}
export default Progress;