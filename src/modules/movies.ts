import { urls, api_key, MOVIE_FILTER } from '../common/constants/constants';
import { ApiPath } from '../common/enums/enums';
import { Movies } from '../services/movie.service';
import { getCard } from '../services/services';

const moviesByName = new Movies(urls.api, ApiPath.SEARCH, api_key);
const popularMovies = new Movies(urls.api, ApiPath.POPULAR, api_key);
const moviesByRate = new Movies(urls.api, ApiPath.RATE, api_key);
const upComingMovies = new Movies(urls.api, ApiPath.UOCOMING, api_key);
const page: {} = {
    page: 2,
};

function movies() {
    const buttons = document.querySelectorAll('.btn-check');
    buttons.forEach((btn) => {
        btn.addEventListener('input', (e) => {
            // if(e.target.id === MOVIE_FILTER.POPULAR) {
            //     getCard(popularMovies.getMovie(), page).then((res) => {
            //         console.log(res.results);
            //     })
            // }

            switch (e.target.id) {
                case MOVIE_FILTER.POPULAR:
                    getCard(popularMovies.getMovie(), page).then((res) => {
                        console.log(res.results);
                    });
                    break;
                case MOVIE_FILTER.TOP_RATED:
                    getCard(moviesByRate.getMovie(), page).then((res) => {
                        console.log(res.results);
                    });
                    break;
                case MOVIE_FILTER.UPCOMING:
                    getCard(upComingMovies.getMovie(), page).then((res) => {
                        console.log(res.results);
                    });
                    break;

                default:
                    console.log('No any movies');
            }
        });
    });
}

export default movies;
