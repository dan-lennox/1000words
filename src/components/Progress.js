/**
 * Progress Component.
 */

const Progress = ({ current, total }) => {
  return (
    <div id="progress"> { current + 1 } / { total }</div>
  );
}
export default Progress;