import { Movies } from '../../services/movie.service';
import { ApiPath } from '../enums/enums';

export const api_key: string = '24080a064260f54bf4fc698756550370';
export const urls: {
    api: string;
    image: string;
} = {
    api: 'https://api.themoviedb.org/3',
    image: 'https://image.tmdb.org/t/p/w500',
};

export const MOVIE_FILTER: {
    SEARCH: string;
    UPCOMING: string;
    POPULAR: string;
    TOP_RATED: string;
} = {
    SEARCH: 'search',
    UPCOMING: 'upcoming',
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
};

export const moviesByName = new Movies(urls.api, ApiPath.SEARCH, api_key);
export const popularMovies = new Movies(urls.api, ApiPath.POPULAR, api_key);
export const moviesByRate = new Movies(urls.api, ApiPath.RATE, api_key);
export const upComingMovies = new Movies(urls.api, ApiPath.UOCOMING, api_key);
export const page: { page: number; selectedFilms: string } = {
    selectedFilms: '',
    page: 2,
};
