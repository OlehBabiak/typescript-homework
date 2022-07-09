import { hideFilmContent } from './helpers/helpers';
import form from './modules/form';
import movies from './modules/movies';

export async function render(): Promise<void> {
    // TODO render your app here
    hideFilmContent();
    movies();
    form();
}
