import React from 'react';
import classes from './DataItem.module.css';

const DataItem = props => {
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
      </ul>
    </div>
  );
};

export default DataItem;
