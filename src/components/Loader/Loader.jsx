import css from './Loader.module.scss';
import { RotatingLines } from 'react-loader-spinner';

const Loader = function () {
  return (
    <div className={css['loader-thumb']}>
      <RotatingLines
        strokeColor="orange"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
