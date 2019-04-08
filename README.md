# reactjs-videoportal
Create ReactJS small app

Task1
1. created empty project using https://expressjs.com/ru/starter/installing.html

Task2
1. was installed: <br />
Webpack: npm install --save webpack  <br />
React: npm install react react-dom --save-dev <br />
Redux: npm install --save redux <br />
React-Redux: npm install --save react-redux <br />
Redux Dev tools: npm install --save-dev redux-devtools <br />
React router: npm install --save react-router <br />
Jest: npm install --save-dev jest <br />
Babel: npm install babel-core babel-loader babel-preset-env babel-preset-react @babel/preset-react --save-dev <br />
3. webpack.config file was created.  <br />
The following commands can be used in cmd:  <br />
npm run build:dev <br />
npm run build:prod <br />
npm test /to run jest tests/ <br />
webpack-dev-server /just to check if hello world will be rendered/ <br />

Task3
Added markup using react. App should have 2 pages, so components were separated into packages depending on which page they exist. Also some common were moved two anothe package

Task4
1. Added unit tests. Enzyme and Jest were used. Snapshot testing was used. Coverage >80% <br />
to run tests and coverage(change property collectCoverage in case don't need): npm run test <br />
tests will be running in watch mode - in case something was changed, tests will be rerendered <br/>
coverage: reactjs-videoportal\output\coverage\jest\lcov-report\index.html
2. Cypress was installed. Added e2e small test using cypress: <br/> reactjs-videoportal\cypress\integration\videoportal.spec.js <br/>
to run: npm run cypress:open

Task5
1. Added redux store: actions, reducer are in +state folder <br />
2. Coverage for actions.reducer higher >60%  (see in screenshots or check reactjs-videoportal\output\coverage\jest\lcov-report\index.html) <br/>
3. TODO: Need to update other tests to make coverage ~100% AND offline data storage