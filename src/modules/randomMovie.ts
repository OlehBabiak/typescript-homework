import { hiderandomFilm } from '../helpers/helpers';

function rundomMovie(overview: string, title: string, path: string) {
    hiderandomFilm();
    const random = document.createElement('div');
    console.log('created');

    random.classList.add('row', 'py-lg-5');
    random.innerHTML = `
                    <div
                        class="col-lg-6 col-md-8 mx-auto"
                        style="background-color: #2525254f"
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
