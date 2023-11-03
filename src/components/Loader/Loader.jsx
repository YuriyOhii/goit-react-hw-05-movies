import { Audio } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';
export const Loader = () => {
  return (
    <Wrap>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="orange"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </Wrap>
  );
};
