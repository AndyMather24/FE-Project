import React from 'react';
import * as api from '../../api';
import '../Delete/Delete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Delete = props => {
  return (
    <div
      onClick={e => {
        api.deleteComment(props.id).then(res => {
          if (res.status === 200) return props.updateComment(props.article_id);
        });
      }}
    >
      {' '}
      <FontAwesomeIcon className="trash-icon" icon="trash-alt" />{' '}
    </div>
  );
};

export default Delete;
