import React from 'react';
import useStyles from './styles';

function getDateFormat(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const formattedTime = `${year}-${month}-${day}`;
  return formattedTime;
}

function CaseTile({ singleCase }) {
  const classes = useStyles();
  return (
    <div
      key={singleCase.id}
      className={classes.main}
    >
      <div className={classes.imageContainer}>
        <img className={classes.tileImage} alt="Bike" src={singleCase.media.image_url} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.titleDescriptionContainer}>
          <text className={classes.title}>{singleCase.title}</text>
          <text className={classes.description}>{singleCase.description}</text>
        </div>
        <div className={classes.dateAddressContainer}>
          <text className={classes.date} style={{ fontSize: 'calc(12px + 1vw)' }}>
            {getDateFormat(singleCase.occurred_at)}
            {' '}
            {singleCase.address}
          </text>
        </div>
      </div>

    </div>
  );
}
export default CaseTile;
