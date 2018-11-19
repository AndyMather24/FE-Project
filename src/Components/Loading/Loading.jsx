import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = props => {
  return (
    <div className="loading">
      <Loader type="Triangle" color="#00BFFF" height="200" width="200" />;
    </div>
  );
};

export default Loading;
