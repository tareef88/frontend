import React from 'react';
import { compose } from 'recompose';
import { createUseStyles } from 'react-jss';
import CasesList from './components/CasesList';
import {
  WithLoader, ErrorPage, Handlers, fetchCasesHandler, initiateStates,
} from './utils/HOCComponents';


const useStyles = createUseStyles({
  main: {
    padding: 30,
    justifyContent: 'center',
  },
  input: {
    width: '25%',
  },
});


function App({ filteredCases, filterList, searchText }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h1>List of Stolen Bikes</h1>
      <input className={classes.input} placeholder=" Search by title or address" value={searchText} onChange={filterList} />
      <CasesList cases={filteredCases} />
    </div>

  );
}

export default compose(
  initiateStates,
  fetchCasesHandler,
  WithLoader,
  ErrorPage,
  Handlers,
)(App);
