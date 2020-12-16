import React from 'react';
import animation from '../../assets/lottie/18720-baby-yoda.json';
import Lottie from 'lottie-react-web';

const Loader = () => {
  return (
    <Lottie
      width="40%"
      options={{
        animationData: animation,
      }}
    />
  );
};

export default Loader;
