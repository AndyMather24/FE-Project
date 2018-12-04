import React from 'react';
import Loader from 'react-loader-spinner';
import './Loading.css'
const Loading = props => {
  return (
    <div className="loading">
      <Loader type="Oval" color="#0066CC" height={80} width={80} />
    </div>
  );
};

export default Loading;
