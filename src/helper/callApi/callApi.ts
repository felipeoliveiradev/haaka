const API = process.env.REACT_APP_BASE_API;

export const callApi = (method: string, path: string, data?: object, ) => {
  const token = localStorage.getItem("token");
  const protect = token ? token : "";
  return fetch(`${API}/${path}`, {
    body: JSON.stringify(data),
    headers: protect ? {
      "Authorization": "Bearer " + protect,
      "Content-Type": "application/json"
    } : {
      "Content-Type": "application/json"
    },
    method
  })
    // tslint:disable-next-line: no-any
    .then(async (res: any) => {
      if (res.status === 200 || res.status === 201) {
        return res.text().then((text: string) => {
          return { text: text ? JSON.parse(text) : {}, res };
        });
      } else if (res.status === 204) {
        return res;
      }

      return res.text().then((text: string) => {
        throw text ? JSON.parse(text) : {};
      });
    })
    // tslint:disable-next-line: no-any
    .catch((err: any) => {
      throw err;
    });
};
