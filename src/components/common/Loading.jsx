import { Circles } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <Circles
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      color="#c0efff"
      ariaLabel="circles-loading"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
      visible={true}
      height={100}
      width={100}
    />
  );
};
