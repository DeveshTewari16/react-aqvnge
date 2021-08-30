import React, { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import { data } from './data.js';
import DataItem from './DataItem';
import Modal from './Modal.js';
import Reviews from './Reviews.js';

export default function App() {
  const [search, setSearch] = useState('');
  const [data_list, setData] = useState(data);
  const [fetchedData, setFetchedData] = useState([]);

  const [modal, setModalState] = useState(false);
  const history = useHistory();

  function debouncer(fn, d) {
    let timer;
    return function() {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  }

  useEffect(() => {
    console.log(fetchedData);
  }, [fetchedData]);

  const handleSearch = e => {
    const value = e.target.value;
    setSearch(value);
    console.log(value);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setFetchedData([
          {
            json
          }
        ]);
        console.log(json);
      });
  };

  const debouncedSearch = debouncer(handleSearch, 1000);

  const handleAdd = () => setModalState(!modal);

  const handleReviews = id => {
    history.push(`/reviews/${id}`);
  };

  //delete handler
  const deleteHandler = id => {
    console.log('Inside Delete clicked');
    console.log(id);

    let refArr = data_list.filter(item => {
      return item.id != id;
    });
    setData([...refArr]);
  };

  return (
    <React.Fragment>
      <div className={classes.main}>
        <h1>Recipe Details</h1>
        <p class="col-lg-8 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 para-txt light-gray mb50">
          We bring you powerful advantages to Choose your recipe details.
        </p>
        <div className={classes.add}>
          <input placeholder="Search recipe" onChange={debouncedSearch} />
          <button> Search</button>
        </div>

        <button onClick={handleAdd}>Add Recipe</button>
        {modal && (
          <Modal
            handleAdd={handleAdd}
            setModalState={setModalState}
            handleClose={handleAdd}
            addList={setData}
            dataList={data_list}
            deleteList={deleteHandler}
          />
        )}
      </div>
      <div>
        {data_list.map(item => {
          return (
            <DataItem
              key={item.title}
              items={item}
              deleteList={deleteHandler}
              handleReviews={handleReviews}
              dataList={data_list}
            />
          );
        })}
      </div>
      <footer className={classes.footer}>
        <p> Copy rights reserved.</p>
      </footer>
      <Switch>
        <Route path="/reviews/:id" exact>
          <Reviews />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
