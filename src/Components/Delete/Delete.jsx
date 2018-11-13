import React from 'react';
import * as api from '../../api';
const Delete = props => {
  return (
    <div>
      <button
        onClick={e => {
          api.deleteComment(props.id).then(res => {
            console.log(res);
          });
        }}
      >
        {' '}
        Delete{' '}
      </button>
    </div>
  );
};

export default Delete;
