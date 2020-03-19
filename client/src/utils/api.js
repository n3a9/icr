/* eslint-disable no-console */

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://icr.now.sh/api"
});

export const getCourseByID = id => {
  const requestExtension = `/courses/${id}`;
  return instance.get(requestExtension).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const addResource = course => {
  return instance.post("/courses", course).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const editResource = (id, course) => {
  const requestExtension = `/courses/${id}`;
  return instance.put(requestExtension, course).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};
