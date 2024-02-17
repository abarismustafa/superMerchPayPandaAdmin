const token = window.localStorage.getItem("userToken");
const requestMiddleWare = (config) => {
  const headers = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
    ...config?.headers, // Spread existing headers from config
  };

  // Merge the headers into the config
  return { ...config, headers };
};

const responseMiddleWare = (response) => {
  return response.data;
};

const errorHandlerMiddleWare = (error) => {
  return Promise.reject(error);
};

export { requestMiddleWare, responseMiddleWare, errorHandlerMiddleWare };
