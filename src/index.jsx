import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './+state/store/store';
import Root from './root/Root';

const { store, persistor } = configureStore();

ReactDOM.render(<Root store={store} persistor={persistor} />, document.getElementById('root'));
