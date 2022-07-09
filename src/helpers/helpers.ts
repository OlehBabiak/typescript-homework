import { page } from '../common/constants/constants';
import { MovieConfig } from '../interfaces/movie-config';
import { MovieCard } from '../modules/moviItem';
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
