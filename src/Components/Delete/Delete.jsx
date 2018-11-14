import React from 'react';
import * as api from '../../api';
const Delete = props => {
  return (
    <div>
      <button
        onClick={e => {
          api.deleteComment(props.id).then(res => {
            if (res.status === 200) return props.updateComment(props.article_id);
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
