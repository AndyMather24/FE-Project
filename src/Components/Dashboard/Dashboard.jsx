import React from 'react';
import { Link } from '@reach/router';
import './Dashboard-section.css';

const Dashboard = props => {
  return (
    <div className="dashboard">
      {props.topics.map(topic => {
        return (
          <div className={topic.title.concat(' fade')} key={topic._id}>
            <Link className="nav-links" to={`/topics/${topic.slug}/articles`}>
              {topic.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
