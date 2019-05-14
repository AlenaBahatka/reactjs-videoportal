import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return (
		<div>
			<h2>404 - Page Not Found</h2>
		</div>
	);	
}

export default NotFoundPage;
