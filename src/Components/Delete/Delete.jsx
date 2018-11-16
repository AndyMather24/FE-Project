import React from 'react';
import * as api from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <FontAwesomeIcon icon="trash-alt" />{' '}
      </button>
    </div>
  );
};

export default Delete;
