/**
 * Progress Component.
 */
import { ReactElement } from 'react';
import styles from './progress.module.scss';

type Props = {
  current: number;
  total: number;
};

const Progress = ({ current, total }: Props): ReactElement => {
  return (
    <div className={styles.progress}>
      {' '}
      {current + 1} / {total}
    </div>
  );
};
export default Progress;
