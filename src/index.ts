import { hideFilmContent } from './helpers/helpers';
import movies from './modules/movies';

export async function render(): Promise<void> {
    // TODO render your app here
    hideFilmContent();
    movies();
}
