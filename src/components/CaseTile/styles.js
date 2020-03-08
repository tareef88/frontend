import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main: {
    display: 'flex',
    flexDirection: 'row',
    height: 250,
    marginTop: 30,
    borderRadius: 15,
    overflow: 'hidden',
    '-webkit-box-shadow': '0px 7px 40px 6px rgba(0,0,0,0.75);',
    '-moz-box-shadow': '0px 7px 40px 6px rgba(0,0,0,0.75);',
    'box-shadow': '0px 7px 40px 6px rgba(0,0,0,0.75);',
  },
  imageContainer: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  infoContainer: {
    textAlign: 'left',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '900',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
  address: {
    fontSize: 14,

  },
  tileImage: {
    width: 90,
    height: 80,
  },
  titleDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
    paddingLeft: 10,
  },
  dateAddressContainer: {
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  '@media (min-width: 760px)': {
    tileImage: {
      width: 180,
      height: 150,
    },
    main: {
      height: 300,
    },
    title: {
      fontSize: 16,
    },
    description: {
      fontSize: 16,
    },
    date: {
      fontSize: 16,
    },
    address: {
      fontSize: 16,
    },
  },
  '@media (min-width: 1000px)': {
    tileImage: {
      width: 250,
      height: 200,
    },
    title: {
      fontSize: 20,
    },
    description: {
      fontSize: 20,
    },
    date: {
      fontSize: 20,
    },
    address: {
      fontSize: 20,
    },
    main: {
      height: 350,
    },
  },

});

export default useStyles;
