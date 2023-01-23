export const getFunctionAppDetails = () => {
    return {
        functionAppBaseUrl: process.env.REACT_APP_AZURE_FUNCTION_ENDPOINT,
        functionAppKey: process.env.REACT_APP_AZURE_FUNCTION_KEY
    }
}

export const constructEndpoint = (endpointName, queryParams) => {
    const { functionAppBaseUrl, functionAppKey } = getFunctionAppDetails();
    const url = new URL(functionAppBaseUrl);
    url.pathname += endpointName;
    for (const key in queryParams) {
        if(queryParams.hasOwnProperty(key)) {
            url.searchParams.append(key, queryParams[key])
        }
    }
    // I wanted to do the following but JS insists on url encoding parts of the function app key, rendering it unusable in the url
    // url.searchParams.append('code', functionAppKey);

    console.log(url.href);
    const appKeyAdditionChar = url.href.toString().includes('?') ? '&' : '?'
    return url.href + appKeyAdditionChar + `code=${functionAppKey}`;
}