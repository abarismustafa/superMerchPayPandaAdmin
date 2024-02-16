const requestMiddleWare = (config) => {
    // console.log(config);
    return { ...config };
};

const responseMiddleWare = (response) => {
    return response.data;
};

const errorHandlerMiddleWare = (error) => {
    return Promise.reject(error);
};

export { requestMiddleWare, responseMiddleWare, errorHandlerMiddleWare };
