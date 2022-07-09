import { moviesByName } from '../common/constants/constants';
import { hideFilmContent, stateHandler } from '../helpers/helpers';

function form() {
    const formElement: any = document.querySelector('.form-inline');
    formElement.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const formData = new FormData(formElement);
        const value = formData.get('search');
        hideFilmContent();
        let url: string = '';
        url = `${moviesByName.getMovie()}&query=${value}`;
        stateHandler(url);
    });
}

export default form;
