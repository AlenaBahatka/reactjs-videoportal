import express from 'express';
import Loadable from 'react-loadable';
import { matchRoutes } from 'react-router-config';

import createStore from './helpers/createStore';
import renderer from './helpers/renderer';
import { routes } from '../root/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore();

	const promises = matchRoutes(routes, req.path)
		.map(({ route }) => (route.loadData ? route.loadData(store, req.path) : null))
		.map((promise) => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(reject);
				});
			}
		});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);
		if (context.notFound) {
			res.status(404);
		}
		res.send(content);
	});
});

Loadable.preloadAll().then(() => {
	app.listen(3000, () => {
		console.log('Routing on port 3000!');
	});
});
