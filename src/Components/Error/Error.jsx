import React from 'react';

const Error = props => {
  return (
    <div>
      <h4>{props.status}</h4>
      <h6>{props.msg}</h6>
    </div>
  );
};

export default Error;
