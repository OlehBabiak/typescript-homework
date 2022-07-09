import { urls } from '../common/constants/constants';
import { imgUrlHandler } from '../helpers/helpers';

function createFavoriteCard(path: string, overview: string, date: string) {
    const favorite = document.createElement('div');
    favorite.classList.add('col-12', 'p-2', 'favorit-inner');
    favorite.innerHTML = `
                        <div class="card shadow-sm">
                            <img
                                src=${imgUrlHandler(urls.image, path)}
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
                                  ${overview}
                                </p>
                                <div
                                    class="d-flex justify-content-between align-items-center"
                                >
                                    <small class="text-muted">${date}</small>
                                </div>
                            </div>
                        </div>
                `;
    const favoriteparent = document.querySelector('.favorit-wrapper');
    favoriteparent?.append(favorite);
}

export default createFavoriteCard;
