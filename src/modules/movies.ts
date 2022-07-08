import { urls, api_key, MOVIE_FILTER } from '../common/constants/constants';
import { ApiPath } from '../common/enums/enums';
import { hideFilmContent } from '../helpers/helpers';
import { Movies } from '../services/movie.service';
import { getCard } from '../services/services';
import { MovieCard } from './moviItem';

const moviesByName = new Movies(urls.api, ApiPath.SEARCH, api_key);
const popularMovies = new Movies(urls.api, ApiPath.POPULAR, api_key);
const moviesByRate = new Movies(urls.api, ApiPath.RATE, api_key);
const upComingMovies = new Movies(urls.api, ApiPath.UOCOMING, api_key);
const page: { page: number; selectedFilms: string } = {
    selectedFilms: '',
    page: 2,
};

function movies() {
    interface MovieConfig {
        overview: string;
        poster_path: string;
        release_date: string;
        id: string;
    }

    let state: [] = [];

    function stateHandler(url: string) {
        getCard(url, page).then((res) => {
            state = res.results;
            state.forEach(
                ({ overview, poster_path, release_date, id }: MovieConfig) => {
                    new MovieCard(
                        poster_path,
                        overview,
                        release_date,
                        '.container .row',
                        id
                    ).render();
                }
            );
        });
    }

    const buttons = document.querySelectorAll('.btn-check');
    buttons.forEach((btn) => {
        btn.addEventListener('input', () => {
            let url: string = '';
            if (btn.id === 'popular') {
                hideFilmContent();
                url = popularMovies.getMovie();
                stateHandler(url);
            } else if (btn.id === 'upcoming') {
                hideFilmContent();
                url = upComingMovies.getMovie();
                stateHandler(url);
            } else if (btn.id === 'top_rated') {
                hideFilmContent();
                url = moviesByRate.getMovie();
                stateHandler(url);
            }
            page.selectedFilms = url;
        });
    });

    const cardItem = document.querySelector('row');
    cardItem?.addEventListener('click', (e: Event) => {
        console.log(e.target.id);
    });

    const loadMoreBtn = document.querySelector('#load-more');
    loadMoreBtn?.addEventListener('click', onPageChange);
    function onPageChange() {
        page.page = page.page + 1;
        stateHandler(page.selectedFilms);
        if (page.page === 100) {
            removeEventListener('click', onPageChange);
        }
    }

    // form

    const formElement: any = document.querySelector('.form-inline');
    formElement.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formData = new FormData(formElement);
        const value = formData.get('search');
        hideFilmContent();
        let url: string = '';
        url = `${popularMovies.getMovie()}&query=${value}`;
        stateHandler(url);
    });
}

export default movies;
