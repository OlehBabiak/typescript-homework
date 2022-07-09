import { hideFilmContent } from './helpers/helpers';
import movies from './modules/movies';

export async function render(): Promise<void> {
    // TODO render your app here
    hideFilmContent();
    movies();
    const cardItem = document.querySelector('row');
    cardItem?.addEventListener('click', (e: Event) => {
        console.log(e.target.id);
    });
}
