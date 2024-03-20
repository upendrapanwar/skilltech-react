import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  const loaderStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  }; 

  return (
    <div style={loaderStyles}>
      <Bars
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
