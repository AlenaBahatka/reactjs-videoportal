import React from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchPage from './search-page/SearchPage';
import ErrorBoundary from './common-components/error-boundary/ErrorBoundary'

let filmsStub = [
    {
        title: 'Roma',
        director: 'Alfonso Cuarón',
        genre: 'comedy',
        year: 2017,
        coverPicture: 'https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        rating: 8,
        description: 'dddd',
        fullDescription: 'ddddddd',
        duration: 124,
        id: 'id1'
    },
    {
        title: 'Tristana',
        director: ' Luis Buñuel',
        genre: 'drama',
        year: 1970,
        coverPicture: 'https://m.media-amazon.com/images/M/MV5BMDU5ZWE3M2MtZTVhYS00Yjk2LWFkYjQtZDdkNzc1YmJmMGIxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY268_CR9,0,182,268_AL_.jpg',
        rating: 9,
        description: 'ffff',
        fullDescription: 'ffffff',
        duration: 123,
        id: 'id2'
    }
]
// two different pages. 
// uncoment one of them for now. later add functionality for navigation
ReactDOM.render(<ErrorBoundary><SearchPage films={filmsStub} /></ErrorBoundary>, document.getElementById('root'));
// ReactDOM.render(
//     <ErrorBoundary>
//         <FilmPage 
//             film={filmsStub[1]} 
//             similarFilms={filmsStub}
//         />
//     </ErrorBoundary>,
//     document.getElementById('root')
// );
