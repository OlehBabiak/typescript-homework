import {
    page,
    popularMovies,
    upComingMovies,
    moviesByRate,
} from '../common/constants/constants';
import {
    hideFaviriteFilm,
    hideFilmContent,
    hiderandomFilm,
    stateHandler,
} from '../helpers/helpers';

function movies() {
    function startRender() {
        hideFilmContent();
        hiderandomFilm();
        hideFaviriteFilm();
        stateHandler(popularMovies.getMovie());
        page.selectedFilms = popularMovies.getMovie();
    }

    startRender();
    localStorage.clear();
    localStorage.setItem('arr', JSON.stringify([]));

    const buttons = document.querySelectorAll('.btn-check');
    buttons.forEach((btn) => {
        btn.addEventListener('input', () => {
            let url: string = '';
            switch (btn.id) {
                case 'popular':
                    hideFilmContent();
                    hiderandomFilm();
                    url = popularMovies.getMovie();
                    stateHandler(url);
                    break;
                case 'upcoming':
                    hideFilmContent();
                    hiderandomFilm();
                    url = upComingMovies.getMovie();
                    stateHandler(url);
                    break;
                case 'top_rated':
                    hideFilmContent();
                    hiderandomFilm();
                    url = moviesByRate.getMovie();
                    stateHandler(url);
                    break;

                default:
                    hideFilmContent();
                    url = popularMovies.getMovie();
                    stateHandler(url);
                    break;
            }
            page.selectedFilms = url;
        });
    });

    const loadMoreBtn = document.querySelector('#load-more');
    loadMoreBtn?.addEventListener('click', onPageChange);
    function onPageChange() {
        hiderandomFilm();
        page.page = page.page + 1;
        stateHandler(page.selectedFilms);
        if (page.page === 100) {
            removeEventListener('click', onPageChange);
        }
    }
}

export default movies;
