# reactjs-videoportal
Create ReactJS small app

Task1
1. created empty project using https://expressjs.com/ru/starter/installing.html <br />
2. node server.js => http://localhost:3000/ <br />

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
3. updated tests <br/>
4. Added selector according to suggestion <br/>
5. Added new lib: npm install --save redux-persist <br/>

Task6
1. add router npm install --save react-router-dom <br/>
2. two main pages should work. links were added to titles of films and button 'search'.<br/>
3. 404 page was added<br/>
4. also user should be able to open page using url<br/>
5. hash was used according to the following recomendation: https://github.com/ReactTraining/react-router/blob/master/FAQ.md#why-doesnt-my-application-render-after-refreshing <br/>
6. dist folder was deleted from git repo <br />
7. note: as there is no requirements about test. some of them may fail after changes connected with routing. <br />

Task7
1. run (for example from a build folder): node bundle.js - should start on loclahost:3000 <br />
2. if any of files are changed -> then rerun webpack -> then Restart server <br />
to make it available nodemon was installed. to try it run 2 commands: <br />
a) npm run build:dev:server<br />
b) npm run dev:server<br />
3. + npm install --save-dev npm-run-all <br />
to tun two mentioned commands using one command.<br />
just use in terminal the following command: npm run dev<br />
4. main logic connected with server and client is in src/app, initial state added after full loading in global variable<br />
5. added code splitting using libriary react-loadable <br />
6. webpack config for server and client is in webpack folder