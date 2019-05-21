// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { getBundles } from 'react-loadable/webpack';
import Loadable from 'react-loadable';

import Root from '../../root/Routes';
import ErrorBoundary from '../../common-components/error-boundary/ErrorBoundary';
import stats from '../../../public/react-loadable.json';
import type {StoreFlowtype} from '../../flowtypes/storeFlowtype';

export default (req: {path: string}, store: StoreFlowtype, context: {}) => {
	const modules = [];

	const renderRoot = () => (
		<Loadable.Capture
			report={(moduleName) => {
				modules.push(moduleName);
			}}
		>
			<Provider store={store}>
				<ErrorBoundary>
					<StaticRouter location={req.path} context={context}>
						<Root />
					</StaticRouter>
				</ErrorBoundary>
			</Provider>
		</Loadable.Capture>
	);

	const content = renderToString(renderRoot());
	const preloadedState = store.getState();
	const bundles = getBundles(stats, modules);

	return renderHTML(content, preloadedState, bundles);
};

function renderHTML(content, preloadedState, bundles): string {
	return `
        <!doctype html>
        <html>
            <head>
                <meta charset=utf-8>
                <title>videoportal</title>
                <!-- Latest compiled and minified CSS -->
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
            </head>
            <body>
                <div id="root" class="container">${content}</div>
                <script>
                    window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                ${bundles.map((bundle) => `<script src="${bundle.publicPath}"></script>`).join('\n')}
                <script src="/main.bundle.js"></script>
            </body>
        </html>
    `;
}
