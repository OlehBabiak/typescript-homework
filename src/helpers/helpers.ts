import { page } from '../common/constants/constants';
import { MovieConfig } from '../interfaces/movie-config';
import favoritMovies from '../modules/favorite-movies';
import { MovieCard } from '../modules/moviItem';
import rundomMovie from '../modules/randomMovie';
import { getCard } from '../services/services';

export const getStringifiedQuery = (query: {}) => {
    let stringifiedQuery = '';

    for (const [key, value] of Object.entries(query)) {
        stringifiedQuery = `${key}=${value}`;
    }
    return stringifiedQuery;
};

export const hideFilmContent = (): void => {
    let filmContainerContent: any = document.querySelectorAll('.col-lg-3');
    filmContainerContent.forEach((item: any) => {
        item.remove();
    });
};

export const hiderandomFilm = (): void => {
    let randomfilm: any = document.querySelector('.py-lg-5');
    randomfilm.remove();
};

export const hideFaviriteFilm = (): void => {
    let favoriteFilm: any = document.querySelectorAll('.favorit-inner');
    favoriteFilm.forEach((item: any) => {
        item.remove();
    });
};

export const imgUrlHandler = (url: string, src: string) => {
    if (url && src) {
        return `${url}${src}`;
    } else {
        return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
    }
};

export function stateHandler(url: string) {
    let state: [] = [];
    getCard(url, page).then((res) => {
        state = res.results;
        const randomFilm = state[getRandomInt(state.length)];
        const { original_title, overview, poster_path } = randomFilm;
        rundomMovie(overview, original_title, poster_path);
        state.forEach(
            ({ overview, poster_path, id, release_date }: MovieConfig) => {
                new MovieCard(
                    poster_path,
                    overview,
                    '.container .row',
                    id,
                    release_date
                ).render();
            }
        );
    });
}

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};

export const setStorage = (el: any): void => {
    el.addEventListener('click', () => {
        if (!localStorage.getItem('arr')?.includes(el.id)) {
            let favorit = JSON.parse(localStorage.getItem('arr') || '[]');
            favorit.push(el.id);
            localStorage.setItem('arr', JSON.stringify(favorit));
        } else {
            let favorit = JSON.parse(localStorage.getItem('arr') || '[]');
            let index = favorit.indexOf(el.id);
            favorit.splice(index, 1);
            localStorage.setItem('arr', JSON.stringify(favorit));
        }
        favoritMovies();
    });
};
