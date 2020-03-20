/* eslint-disable no-console */

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://icr.now.sh/api"
});

export const getCourseByTitle = title => {
  const requestExtension = `/courses/${title}`;
  return instance.get(requestExtension).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const addCourse = course => {
  return instance.post("/courses", course).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const editCourse = (id, course) => {
  const requestExtension = `/courses/${id}`;
  return instance.put(requestExtension, course).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};
