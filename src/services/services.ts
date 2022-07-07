import { HttpMethod } from '../common/enums/enums';
import { getStringifiedQuery } from '../helpers/helpers';

const getUrl = (url: string, query: {}) => {
    console.log('url: ', `${url}${`&${getStringifiedQuery(query)}`}`);

    return `${url}${`&${getStringifiedQuery(query)}`}`;
};

const getCard = async (url: string, query: {}) => {
    const resp = await fetch(getUrl(url, query), {
        method: HttpMethod.GET,
    });
    if (!resp.ok) {
        throw new Error(`Could not fetch ${url}, status: ${resp.status}`);
    }
    return await resp.json();
};

export { getCard };
