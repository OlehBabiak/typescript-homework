class Movies {
    _apiPath: string;
    _http: string;
    _api_key: string;
    constructor(http: string, apiPath: string, api_key: string) {
        this._apiPath = apiPath;
        this._http = http;
        this._api_key = api_key;
    }

    getMovie() {
        console.log(this._http, this._apiPath);

        return `${this._http}${this._apiPath}?api_key=${this._api_key}`;
    }
}

export { Movies };
