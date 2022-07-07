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
    interface MovieConfig {
        id?: string;
        overview: string;
        poster_path: string;
        release_date: string;
    }

    class MovieCard {
        src: string;
        overview: string;
        date: string;
        parent: any;
        constructor(
            src: string,
            overview: string,
            date: string,
            parentSelector: any
        ) {
            this.src = src;
            this.overview = overview;
            this.date = date;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
            element.innerHTML = `
            <div class="card shadow-sm">
                                <img
                                    src=${urls.image}${this.src}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="red"
                                    fill="red"
                                    width="50"
                                    height="50"
                                    class="bi bi-heart-fill position-absolute p-2"
                                    viewBox="0 -2 18 22"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                    />
                                </svg>
                                <div class="card-body">
                                    <p class="card-text truncate">
                                        ${this.overview}
                                    </p>
                                    <div
                                        class="
                                            d-flex
                                            justify-content-between
                                            align-items-center
                                        "
                                    >
                                        <small class="text-muted">${this.date}</small>
                                    </div>
                                </div>
                            </div>
            `;
            this.parent.append(element);
        }
    }

    getCard(popularMovies.getMovie(), page).then((res) => {
        res.results.forEach(
            ({ overview, poster_path, release_date }: MovieConfig) => {
                new MovieCard(
                    poster_path,
                    overview,
                    release_date,
                    '.container .row'
                ).render();
            }
        );
    });

    const buttons = document.querySelectorAll('.btn-check');
    buttons.forEach((btn) => {
        btn.addEventListener('input', (e) => {
            switch (e.target.id) {
                case MOVIE_FILTER.POPULAR:
                    getCard(popularMovies.getMovie(), page).then((res) => {
                        res.results.forEach(
                            ({
                                overview,
                                poster_path,
                                release_date,
                            }: MovieConfig) => {
                                new MovieCard(
                                    poster_path,
                                    overview,
                                    release_date,
                                    '.container .row'
                                ).render();
                            }
                        );
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
