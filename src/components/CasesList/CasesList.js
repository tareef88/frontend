import React from 'react';
import { createUseStyles } from 'react-jss';
import CaseTile from '../CaseTile';


const useStyles = createUseStyles({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function CasesList({ cases }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {cases.map((v) => (
        <CaseTile key={v.id} singleCase={v} />
      ))}
    </div>
  );
}

export default CasesList;
