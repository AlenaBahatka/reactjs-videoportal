// @flow
import React from 'react';

type NotFoundPagePropTypes = {
	staticContext: {
		notFound?: boolean
	}
}

function NotFoundPage({ staticContext = {} }: NotFoundPagePropTypes) {
	staticContext.notFound = true;
	return (
		<div>
			<h2>404 - Page Not Found</h2>
		</div>
	);
}

export default NotFoundPage;
