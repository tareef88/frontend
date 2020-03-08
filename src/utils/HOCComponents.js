import React from 'react';
import {
  branch, renderComponent, withHandlers, lifecycle, withStateHandlers,
} from 'recompose';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const uri = 'https://bikewise.org:443/api/v2/incidents?page=1&proximity=55.607405%2C12.998945&proximity_square=100';


async function fetchCases(setState) {
  try {
    const fetching = await fetch(uri);
    const incidents = await fetching.json();
    const cases = incidents.incidents;
    setState('filteredCases', cases);
    setState('cases', cases);
    setState('loading', false);
  } catch (error) {
    setState('error', true);
    setState('loading', false);
  }
}


export const WithLoader = branch(({ loading }) => loading, renderComponent(() => (
  <div style={{
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}
  >
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  </div>
)));


export const ErrorPage = branch(({ error }) => error, renderComponent(() => <div>error </div>));

export const Handlers = withHandlers({
  filterList: ({ setState, cases }) => (e) => {
    e.preventDefault();
    const text = e.target.value.toLowerCase();
    const newFiltered = cases.filter((singleCase) => singleCase.address.toLowerCase().includes(text)
    || singleCase.title.toLowerCase().includes(text));
    setState('searchText', e.target.value);
    setState('filteredCases', newFiltered);
  },
});


export const fetchCasesHandler = lifecycle({
  componentDidMount() {
    fetchCases(this.props.setState);
  },
});

export const initiateStates = withStateHandlers({
  loading: true,
  error: false,
  searchText: '',
  cases: [],
  filteredCases: [],
}, {
  setState: () => (key, value) => ({ [key]: value }),
});
