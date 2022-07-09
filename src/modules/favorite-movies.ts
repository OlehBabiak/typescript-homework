import { api_key, page, urls } from '../common/constants/constants';
import { ApiPath } from '../common/enums/enums';
import { hideFaviriteFilm } from '../helpers/helpers';
import { Movies } from '../services/movie.service';
import { getCard } from '../services/services';
import createFavoriteCard from './createFavoriteCard';

function favoritMovies() {
    let arrFromLocalStorage = JSON.parse(localStorage.getItem('arr') || '[]');

    arrFromLocalStorage.forEach((el: any) => {
        if (el) {
            const favoriteMovies = new Movies(
                urls.api,
                ApiPath.FAVORITE,
                api_key
            );

            getCard(favoriteMovies.getMovieById(el), page).then((res) => {
                hideFaviriteFilm();
                createFavoriteCard(
                    res.poster_path,
                    res.overview,
                    res.release_date
                );
            });
        }
    });
}

export default favoritMovies;
