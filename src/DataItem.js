import React, { useState } from 'react';
import classes from './DataItem.module.css';
import { Link, Route, Switch } from 'react-router-dom';

const DataItem = props => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = id => {
    setViewMore(!viewMore);

    return function abc() {
      `<div>
        <p>
          ${props.dataList.filter(item => {
            return item.id == id;
          })}
        </p>
      </div>`;
    };
  };

  const linkState = viewMore ? 'View Less' : 'View More';

  const extraContent = `
  
    ${'This is more details .Click View Less to see less details'}
  `;

  return (
    <div className={classes.item}>
      <ul className={classes.dataItem}>
        <li>{props.items.title}</li>
        <li>
          <button onClick={props.deleteList.bind(null, props.items.id)}>
            Delete
          </button>
        </li>
        <li>
          <button onClick={props.handleReviews.bind(null, props.items.id)}>
            Reviews
          </button>
        </li>
        <li>
          <button onClick={handleViewMore.bind(null, props.items.id)}>
            {linkState}
          </button>
          {viewMore && extraContent}
        </li>
      </ul>
    </div>
  );
};

export default DataItem;
