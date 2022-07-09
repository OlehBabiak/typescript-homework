import { urls } from '../common/constants/constants';
import { imgUrlHandler } from '../helpers/helpers';

function rundomMovie(overview: string, title: string, path: string) {
    const random = document.createElement('div');
    random.style.backgroundImage = `url('${imgUrlHandler(urls.image, path)}')`;
    random.style.backgroundSize = 'cover';

    random.classList.add('row', 'py-lg-5');
    random.innerHTML = `
                    <div
                        class="col-lg-6 col-md-8 mx-auto"
                    >
                        <h1 id="random-movie-name" class="fw-light text-light">
                           ${title}
                        </h1>
                        <p
                            id="random-movie-description"
                            class="lead text-white"
                        >
                        ${overview}
                        </p>
                    </div>
    `;
    const randomParent = document.getElementById('random-movie');
    randomParent?.append(random);
}

export default rundomMovie;
