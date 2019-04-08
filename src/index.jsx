import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'

import SearchPage from './search-page/SearchPage';
import FilmPage from './film-page/FilmPage';
import ErrorBoundary from './common-components/error-boundary/ErrorBoundary'

import configureStore from './+state/store/store'

// two different pages. 
// uncoment one of them for now. later add functionality for navigation

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <SearchPage />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Provider store={store}>
//         <ErrorBoundary>
//             <FilmPage />
//         </ErrorBoundary>
//     </Provider>,
//     document.getElementById('root')
// );

