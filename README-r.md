This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

----------INDEX.JS PRACTICANDO----
JXS Y REACT.CREATEELEMENT
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// const element = document.createElement('h1')
// element.innerText = "Hello, world React";

// const container = document.getElementById('app');
// container.appendChild(element);

// ejemplo con React
// primero tenemos que importar React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// 3.Badge Importamos
import Badge from './components/Badge'

// JSX
// const element = <h1>Hola, estás probando JSX</h1>

// const container = document.getElementById('app');

// ReactDOM.render(__qué vamos a renderizar__, __dónde vamos a renderizar__);
// ReactDOM.render(element, container)

// React.createElement
// const element = React.createElement('h1', {}, 'Hola estás probando react.createElement');
// const container = document.getElementById('app');
// ReactDOM.render(element, container);
// Ahora con los que tienen atributos y agregando variables
// const name = 'Lucy';
// const element = React.createElement('a', {href: 'https://www.linkedin.com/mynetwork/'}, `Linkendin de ${name}`);
// const container = document.getElementById('app');

// const name = 'Lucy'
// const element = <div>
//   <h1>Hola, mi nombre es {name}</h1>
//   <p>Soy front-end Developer egresada de Laboratoria</p>
// </div>

// const container = document.getElementById('app')

const name = 'Lucy';
const element = React.createElement(
  'div', {},
  React.createElement('h1', {}, 'Hola hola'),
  React.createElement('p', {} , `Soy ${name}`)
);
const container = document.getElementById('app')
ReactDOM.render(element, container);

