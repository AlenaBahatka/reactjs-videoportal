import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import ErrorBoundary from './common-components/error-boundary/ErrorBoundary'
import FilmPage from './film-page/FilmPage';
import SearchPage from './search-page/SearchPage';

import configureStore from './+state/store/store'

// two different pages. 
// uncoment one of them for now. later add functionality for navigation

const {store, persistor} = configureStore()

// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <ErrorBoundary>
//                 <SearchPage />
//             </ErrorBoundary>
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ErrorBoundary>
                <FilmPage />
            </ErrorBoundary>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

