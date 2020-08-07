/**
 * Progress Component.
 */
import { ReactElement } from 'react';

type Props = {
  current: number;
  total: number;
};

const Progress = ({ current, total }: Props): ReactElement => {
  return (
    <div id="progress">
      {' '}
      {current + 1} / {total}
    </div>
  );
};
export default Progress;
