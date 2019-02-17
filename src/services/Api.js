import Config from './Api.config';

export default class {
    convertFormData(data) {
        const formData = new FormData();

        Object.keys(data).map((frmData, index) => {
            formData.append(frmData, data[frmData]);
        });

        return formData;
    }

    /**
     * Parses the JSON returned by a network request
     *
     * @param  {object} response A response from a network request
     *
     * @return {object}          The parsed JSON from the request
     */
    parseJSON(response) {
        return response.json();
    }

    /**
     * Checks if a network request came back fine, and throws an error if not
     *
     * @param  {object} response   A response from a network request
     *
     * @return {object|undefined} Returns either the response, or throws an error
     */
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }

        return response
            .json()
            .then(data => {
                // const error = new Error();
                var error = {};
                error.message = data.message || 'Server Error';
                throw error;
            });
    }

    /**
     * Requests a URL, returning a promise
     *
     * @param  {string} url       The URL we want to request
     * @param  {object} [options] The options we want to pass to "fetch"
     *
     * @return {object}           The response data
     */
    request(endpoint, options) {
        const url = new URL(`${Config.Api.url}/${endpoint}`);
        return fetch(url, options)
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    GET(query, params) {
        const url = new URL(`${Config.Api.url}/${query}`);
        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        }

        return fetch(url)
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    POST(query, queryParams, bodyParams) {
        const url = new URL(`${Config.Api.url}/${query}`);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }

        return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyParams),
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    PUT(query, queryParams, bodyParams) {
        const url = new URL(`${Config.Api.url}/${query}`);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }

        return fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyParams),
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    DELETE(query, queryParams, bodyParams) {
        const url = new URL(`${Config.Api.url}/${query}`);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }

        return fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyParams),
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    POST_FORMDATA(query, queryParams, formData) {
        const url = new URL(`${Config.Api.url}/${query}`);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }

        const frmData = convertFormData(formData);

        return fetch(url, {
                method: 'POST',
                mode: 'cors',
                // headers: { 'content-Type': 'multipart/form-data' },
                // eslint-disable-next-line no-use-before-define
                // body: convertFormData(formData),
                body: frmData,
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

    PUT_FORMDATA(query, queryParams, formData) {
        const url = new URL(`${Config.Api.url}/${query}`);
        if (queryParams) {
            Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        }

        const frmData = convertFormData(formData);

        return fetch(url, {
                method: 'PUT',
                mode: 'cors',
                // headers: { 'content-Type': 'multipart/form-data' },
                // eslint-disable-next-line no-use-before-define
                // body: convertFormData(formData),
                body: frmData,
            })
            .then(this.checkStatus)
            .then(this.parseJSON);
    }

}