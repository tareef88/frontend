# Catalog of stolen bikes
In this simple react application you will be able to fetch a cases reported for stolen bikes from around Malmo or to be more specific around the docly office with coordinates `55.607405,12.998945`

# Api used 

To fetch data about stolen bikes:

```js
https://bikewise.org:443/api/v2/incidents?page=1&proximity=55.607405%2C12.998945&proximity_square=100
```

### Deployment

This project is live on :https://frontend-1b099ng5d.now.sh/

### Requirements 
- [x] I want to pull data from the Bikewise API
- [x] I want to see a list of bikes stolen in the Malmö area (the coordinates for our office are 55.607405,12.998945)
- [x] For each reported theft I want to see
- [x] Case title
- [x] Case description
- [x] Date of the theft (format yyyy-mm-dd hh:ss)
- [x] Date of the report (format yyyy-mm-dd hh:ss)
- [x] Location of the theft
- [x] Image of the bike (if available)
- [x] Link to a page with more information
- [x] I want to see a loading state while the cases are loading
- [x] I want to be able to filter the cases by title and by location
- [x] I want to be able to use the app on mobile as well as desktop, with mobile being the most important.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
