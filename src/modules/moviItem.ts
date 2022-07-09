import { urls } from '../common/constants/constants';
import { imgUrlHandler } from '../helpers/helpers';

class MovieCard {
    src: string;
    overview: string;
    date?: string;
    parent: any;
    id: string;
    constructor(
        src: string,
        overview: string,
        parentSelector: any,
        id: string,
        date?: string
    ) {
        this.src = src;
        this.overview = overview;
        this.date = date;
        this.parent = document.querySelector(parentSelector);
        this.id = id;
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
        element.id = this.id;
        element.innerHTML = `
        <div class="card shadow-sm">
                            <img
                                src=${imgUrlHandler(urls.image, this.src)}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="red"
                                fill="#ff000078"
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
                                    <small class="text-muted">${
                                        this.date
                                    }</small>
                                </div>
                            </div>
                        </div>
        `;
        this.parent.append(element);
    }
}

export { MovieCard };
