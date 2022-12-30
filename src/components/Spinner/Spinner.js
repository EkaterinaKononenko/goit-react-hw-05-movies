
import { RotatingLines } from 'react-loader-spinner';

const Spinner = () => (
  <RotatingLines
    strokeColor="brown"
    strokeWidth="5"
    animationDuration="0.75"
    width="400"
    visible={true}
  />
);

export default Spinner;