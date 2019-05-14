import express from 'express';
import Loadable from 'react-loadable';
import { matchRoutes } from 'react-router-config';

import createStore from './helpers/createStore';
import renderer from './helpers/renderer';
import { routes } from '../root/Routes';

var app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
	const store = createStore();

	let promises = matchRoutes(routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store, req.path) : null;
		})
		.map((promise) => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(reject);
				});
			}
		});

	Promise.all(promises).then(() => {
		const context = {};
		let content = renderer(req, store, context);
		if (context.notFound) {
			res.status(404);
		}
		res.send(content);
	});
});

Loadable.preloadAll().then(() => {
	app.listen(3000, function() {
		console.log('Routing on port 3000!');
	});
});
