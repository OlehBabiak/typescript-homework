export const getStringifiedQuery = (query: {}) => {
    let stringifiedQuery = '';

    for (const [key, value] of Object.entries(query)) {
        stringifiedQuery = `${key}=${value}`;
    }
    return stringifiedQuery;
};
